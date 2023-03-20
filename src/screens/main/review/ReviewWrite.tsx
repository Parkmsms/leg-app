import React, {PropsWithChildren, useEffect, useState} from 'react';
import { OrderMainNavProps } from '../../../navigators';
import {
  Keyboard,
  Alert,
  Button,
  PermissionsAndroid,
  Dimensions,
  Image,
  Platform,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { SaveReviewAPI, getAccessToken } from "../../config/AxiosFunction";
import Icon from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import BottomSheet from '../order/orderModal/BottomSheet'
import useDidMountEffect from '../../../hooks/useDidMountEffect';
//MIT Lisense from https://www.npmjs.com/package/react-native-image-resizer
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';
import Fragment from '../../../components/Fragment';
import CustomTextInput from '../../../components/CustomTextInput';

type ReviewWriteProps = {
  route: any;
  navigation?: any;
  isClicked: boolean;
};

 interface ReviewInfo {
    orderId: number;
    star: number;
    comment: string;
    pictureUrl: {
      fileName: string;
      type: string;
      uri: string;
      height: number;
      fileSize: number;
    };
  }
  
   const initialReviewInfo: ReviewInfo = {
    orderId: 0,
    star: 0,
    comment: '',
    pictureUrl: {
      fileName: '',
      type: '',
      uri: '',
      height: 0,
      fileSize: 0,
    },
  };

let FormData = require('form-data');

const width = Dimensions.get('window').width;

const ReviewPage : React.FC<PropsWithChildren<OrderMainNavProps<'ReviewWrite'>>> = ({  navigation, route }) => {
  const [inputReview, setInputReview] = useState<string>('');
  const [photo, setPhoto] = useState<any>('');
  const [request, setRequest] = useState<ReviewInfo>(initialReviewInfo);
  const [modalVisible, setModalVisible] = useState(false);

  // customHook => 첫 렌더링때도 state가 설정되는 것으로 보고 useEffect가 실행하는것 방지
  // useDidMountEffect(() => {
  //   console.log(request);
  // }, isClicked);

  useEffect(() => {
    console.log(route.params);
  }, []);

  const selectPhoto = () => {
    setModalVisible(true);
  };
  const saveReview = async () => {
    // const accessToken = await getAccessToken('accessToken');
    // const headers = {Authorization: accessToken ? 'Bearer ' + accessToken : ''};
     const headers = {Authorization: 1 ? 'Bearer ' + 1 : ''};

    await ImageResizer.createResizedImage(request.pictureUrl.uri, 240, 240, 'JPEG', 50, 0).then(response => {
      console.log('response', response);
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
        .post('https://0giri.com/api/reviews', data, {headers: headers})
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

    console.log('url', url, '\nfile', formData);

    axios
      .put(url, formData)
      .then(res => console.log(res))
      .catch(err => console.log('second', err));
  };

  const goTakePhoto = async () => {
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
        // setRequest(current => {
        //   let newCondition = {...current};
        //   newCondition.pictureUrl = result.assets[0];
        //   return newCondition;
        // });
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
        if (result.didCancel) {
          return null;
        }
        const localUri = result.assets[0].uri;
        const uriPath = localUri.split('//').pop();
        // const imageName = localUri.split("/").pop();
        setPhoto('file://' + uriPath);
        // setRequest(current => {
        //   let newCondition = {...current};
        //   newCondition.pictureUrl = result.assets[0];
        //   return newCondition;
        // });
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
      <View style={{marginTop: 10}}>
        <Stars
          default={0}
          count={5}
          starSize={50}
          className='border1 bg-[#F3F3F3] h-[100px]'
          // update={(val: number) =>
          //   setRequest(current => {
          //     let newCondition = {...current};
          //     newCondition.star = val;
          //     return newCondition;
          //   })
          // }
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
        style={{textAlignVertical:'top'}}
        placeholder="리뷰작성"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity className='border-[1px] border-[#00C1DE] rounded-lg bg-[#FFFFFF]' onPress={selectPhoto}>
        <Text className='font-suit-700 text-center text-[15px] text-[#00C1DE] m-[8px]'>사진 첨부하기</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={selectPhoto}>
        <Image
          source={{uri: photo ? photo : null}}
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

      <TouchableOpacity style={ReviewWrapper.SubmitButton} onPress={saveReview}>
        <Text style={ReviewWrapper.SubmitButtonText}>리뷰 등록하기</Text>
      </TouchableOpacity>
    <BottomSheet
      style={ReviewWrapper.rootContainer}
      modalVisible={modalVisible}
      goTakePhoto={goTakePhoto}
      goGallery={goGallery}
      setModalVisible={setModalVisible}
    />
    </Fragment>
  );
};
export const ReviewWrapper = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  TextArea: {
    width: width * 0.9,
    height: width * 0.45,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    textAlignVertical: 'top',
    margin: 10,
    borderColor: 'rgba(124, 0, 0, 0.05)',
    borderWidth: 1,
  },
  CenterAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentsBox: {
    borderBottomWidth: 0.4,
    width: width * 0.9,
    marginTop: 20,
    sborderRadius: 1,
    paddingLeft: 26,
    paddingRight: 26,
    borderColor: '#A2A2A2',
    backgroundColor: 'white',
  },
  Horizontal: {
    flexDirection: 'column',
  },
  Vertical: {
    flexDirection: 'row',
  },
  AddPhotoButton: {
    width: width * 0.9,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderStyle: 'solid',
    borderColor: '#00C1DE',
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SubmitButton: {
    width: width * 0.9,
    backgroundColor: '#00C1DE',
    borderRadius: 12,
    height: 54,
    justifyContent: 'center',
    alignContent: 'center',
  },
  InActivateButton: {
    backgroundColor: '#3E3E3E',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  AddPhotoButtonText: {
    fontSize: 13,
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#00C1DE',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  SubmitButtonText: {
    fontSize: 20,
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  FontText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    letterSpacing: 0.5,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
    fontSize: 14,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReviewPage;
