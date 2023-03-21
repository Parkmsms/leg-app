import React, { PropsWithChildren, useEffect, useState } from 'react';
import { OrderMainNavProps } from '../../../navigators';
import {
  PermissionsAndroid,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { SaveReviewAPI, getAccessToken } from "../../config/AxiosFunction";
import Stars from 'react-native-stars';
import BottomSheet from '../order/orderModal/BottomSheet'
//MIT Lisense from https://www.npmjs.com/package/react-native-image-resizer
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';
import Fragment from '../../../components/Fragment';
import Btn from '../../../components/Btn';
import { ReviewWriteReq } from '../../../api/types';
let FormData = require('form-data');
import { goTakePhoto, goGallery } from '../order/OrderFilter';

const ReviewPage: React.FC<PropsWithChildren<OrderMainNavProps<'ReviewWrite'>>> = ({ navigation, route }) => {
  const [photo, setPhoto] = useState<any>('');
  const [request, setRequest] = useState<ReviewWriteReq>({ orderNo: '', star: 0, comment: '', images: [] });
  const [modalVisible, setModalVisible] = useState(false);

  const selectPhoto = () => {
    setModalVisible(true);
  };
  const saveReview = async () => {
    if (request === undefined) return '';
    const headers = { Authorization: 1 ? 'Bearer ' + 1 : '' };

    await ImageResizer.createResizedImage(request.images[0], 240, 240, 'JPEG', 50, 0).then(response => {
      //formData
      const formData: FormData = new FormData();

      //ImageInfo
      formData.append('file', {
        name: response.name,
        uri: Platform.OS === 'ios' ? response.uri.replace('file://', '') : response.uri,
        // type: request.pictureUrl.type,
      });

      let data = {
        // orderId: route.params?.orderId,
        // comment: request.comment,
        // star: request.star,
        images: [response.name],
      };

      axios
        .post('https://0giri.com/api/reviews', data, { headers: headers })
        .then(res => {
          const presignedUrl = res.data[0].preSignedUrl;
          console.log(presignedUrl);
          uploadImageToS3(presignedUrl, formData);
        })
        .catch(err => {
          console.log('first', err);
        });
    });
  };

  const uploadImageToS3 = (url: string, formData: FormData) => {
    // const header = {headers : { 'Content-type':'multipart/form-data'}};
    axios
      .put(url, formData)
      .then(res => console.log(res))
      .catch(err => console.log('second', err));
  };

  const goTakePhoto3 = async () => {
    const result = goTakePhoto()

    console.log(result);

    // setPhoto('file://' + result.uriPath);
    // setRequest(current => {
    //   let newCondition = { ...current };
    //   newCondition.images = result.assets[0];
    //   return newCondition;
    // });
  }

  const goTakePhoto2 = async () => {
    try {
      //카메라 권한체크
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      //Persmssion시
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result: any = await launchCamera({
          mediaType: 'photo',
          cameraType: 'back',
          maxHeight: 200,
          maxWidth: 200,
        });
        if (result.didCancel) {
          return null;
        }
        const localUri = result.assets[0].uri;
        const uriPath = localUri.split('//').pop();
        // const imageName = localUri.split("/").pop();
        setPhoto('file://' + uriPath);
        setRequest(current => {
          let newCondition = { ...current };
          newCondition.images = result.assets[0];
          return newCondition;
        });
      }
      //denied시
      else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const goGallery = async () => {
    try {
      //앨범 권한 체크
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      //Persmssion시
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result: any = await launchImageLibrary({
          mediaType: 'photo',
          maxHeight: 200,
          maxWidth: 200,
        });
        if (result.didCancel) return null;

        const localUri = result.assets[0].uri;
        const uriPath = localUri.split('//').pop();
        // const imageName = localUri.split("/").pop();
        setPhoto('file://' + uriPath);
        setRequest(current => {
          let newCondition = { ...current };
          newCondition.images = result.assets[0];
          return newCondition;
        });
      }
      //denied 시
      else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Fragment className='flex-1 bg-[#FFFFFF] items-center'>
      <View className='flex-row justify-center mt-[20px]'>
        <View className='justify-center items-center'>
          <Image
            source={require('../../../assets/images/auth-home-img.png')}
            className='rounded-lg w-[80px] h-[70px]'
            resizeMode="stretch"
          />
        </View>
        <View className='p-[20px] space-y-3'>
          <Text className='font-suit-700 text-[16px] text-[#111111]'>미쁘동</Text>
          <Text className='font-suit-500 text-[14px] text-[#8F8F8F]'>미쁘동 / 일회용품 선택 O</Text>
        </View>
      </View>
      <Text className='font-suit-500 text-[14px] text-[#111111] mt-[20px]'>리뷰를 작성해주세요👩🏻‍💻</Text>
      <View style={{ marginTop: 10 }}>
        <Stars
          default={0}
          count={5}
          starSize={50}
          className='border1 bg-[#F3F3F3] h-[100px]'
          update={(val: number) =>
            setRequest(current => {
              let newCondition = { ...current };
              newCondition.star = val;
              return newCondition;
            })}

          fullStar={<Text className='text-[#00C1DE] text-[30px]'>★</Text>}
          emptyStar={<Text className='text-[#00C1DE] text-[30px]'>☆</Text>}
        />
      </View>

      <TextInput
        multiline={true}
        numberOfLines={10}
        blurOnSubmit={false}
        className='font-suit-500 bg-[#F3F3F3] rounded-lg mt-[10px] mb-[10px]'
        //   onChangeText={(val: string) =>
        //     setRequest(current => {
        //       let newCondition = {...current};
        //       newCondition.comment = val;
        //       return newCondition;
        //     })
        //   }
        style={{ textAlignVertical: 'top' }}
        placeholder="리뷰작성"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity className='border-[1px] border-[#00C1DE] rounded-lg bg-[#FFFFFF]' onPress={selectPhoto}>
        <Text className='font-suit-700 text-center text-[15px] text-[#00C1DE] m-[8px]'>사진 첨부하기</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={selectPhoto}>
        <Image
          source={{ uri: photo ? photo : null }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            width: 110,
            height: 90,
            margin: 10,
          }}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <Btn
        title="포장받기 완료"
        onPress={() => saveReview}
        className={`py-[14px] bg-[#00C1DE] w-5/6`}
        fontSize={16}
      />
      <BottomSheet
        clssName='justify-center items-center flex-1'
        modalVisible={modalVisible}
        goTakePhoto={goTakePhoto3}
        goGallery={goGallery}
        setModalVisible={setModalVisible}
      />
    </Fragment>
  );
};

export default ReviewPage;
