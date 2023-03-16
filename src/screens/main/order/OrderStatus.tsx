import React, { PropsWithChildren,useState, useEffect } from 'react';
import { OrderProcessNavProps } from '../../../navigators';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity,SafeAreaView,Image } from 'react-native';
import Fragment from '../../../components/Fragment';
import useRefreshOnFocus from '../../../hooks/useRefreshOnFocus';
import Loading from '../../../components/Loading';
import { getActiveLocation } from '../../../api/user-location/user-location';
import Geolocation from 'react-native-geolocation-service';
import { DistanceResp } from '../../../api/types';
import { useGetBetweenDistance } from '../../../api/store/store';
import Btn from '../../../components/Btn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderConfirmPopUp from './OrderConfirmPopUp';
import OrderResultPopUp from './OrderResultPopUp';

interface MyLocation {
  latitude: number;
  longitude: number;
}

const ProcessList: React.FC<PropsWithChildren<OrderProcessNavProps<'OrderStatus'>>> = ({ navigation, route }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [location, setLocation] = useState<MyLocation>({
    latitude: 0,
    longitude: 0,
  });

  const {
    isLoading: orderStatusLoading,
    data: orderStatus,
    error: orderStatusError,
    refetch: refetchOrderStatus,
  } = useGetBetweenDistance(1, {lat : location.latitude ,lng:location.longitude },{ query: { enabled: true } });

  useRefreshOnFocus(refetchOrderStatus);

  useEffect(() => {
    getActiveLocation();
  },[])

  const closeConfirm = () => {
    setConfirmOpen(false);
  };
  const closeResult = () => {
    setResultOpen(false);
  };

  const openCancle = () => {
    console.log('Do not anything this component');
  };

  const openResult = async () => {
    // const accessToken = await getAccessToken('accessToken');
    // const response = await orderFinishAPI(accessToken, propData.id);
    // setOrderFinish(response.data);

    setConfirmOpen(false);
    setResultOpen(true);
  };

  const goReview = () => {
    setConfirmOpen(false);
    navigation.navigate('ReviewPage');
  };
  const goOrderPage = () => {
    setConfirmOpen(false);
    setResultOpen(false);
    navigation.navigate('OrderTab');
  };

  const getActiveLocation = () => {
    console.log(orderStatus?.distance);
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      },
    );
  };


  if (!orderStatus) {
    return <Loading />;
  }


  return (
    <Fragment className='bg-[#FFFFFF]'>
      <View className='flex-col items-center space-y-2 mt-[30px] '>
        <Text className='font-suit-700 text-[24px] text-[#111111]'>픽업 대기중</Text>
        <Text className='font-suit-400 text-[14px] text-[#787878] mb-[20px]'>주문하신 음식이 기다리고 있어요!</Text>
        <Image
            source={require('../../../assets/images/order-status2.png')}
            className='w-[200px] h-[180px] mb-[20px]'
          />
        <View className='flex-row space-x-1'>
          <Text className='font-suit-700 text-[30px] text-[#00C1DE]'>60</Text>
          <Text className='font-suit-700 text-[30px] text-[#000000]'>분</Text>
        </View>

        <View className='flex-row space-x-1'>
          <Text className='font-suit-700 text-[14px] text-[#00C1DE]'>남은거리 :</Text>
          <Text className='font-suit-700 text-[14px] text-[#00C1DE] mb-[20px]'>{orderStatus.distance}</Text>
          <Text onPress={getActiveLocation} className=' font-suit-700 text-[14px]'>↻</Text>
        </View>
        <Btn
        title="포장받기 완료"
        onPress={()=>setConfirmOpen(true)}
        className={`py-[14px] bg-[#00C1DE] w-5/6`}
        fontSize={16}
      />
      </View>
      {/* confirm Modal */}
      <OrderConfirmPopUp
        open={confirmOpen}
        close={closeConfirm}
        title={'포장받기 완료'}
        subTitle={`포장받기 완료처리 하시겠습니까?`}
        openResult={openResult}
        openCancle={openCancle}
      />
      {/* result Modal */}
      <OrderResultPopUp
        open={resultOpen}
        close={closeResult}
        orderFinish={1}
        title={'별점을 선택해주세요'}
        subTitle={'어떠셨나요? :)'}
        go={goReview}
        goOrderPage={goOrderPage}
      />
    </Fragment>
  );
};

export default ProcessList;
