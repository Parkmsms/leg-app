import React, { PropsWithChildren,useState, useEffect } from 'react';
import { OrderMainNavProps } from '../../../navigators';
import { Text, View, Image } from 'react-native';
import Fragment from '../../../components/Fragment';
import useRefreshOnFocus from '../../../hooks/useRefreshOnFocus';
import Loading from '../../../components/Loading';
import Geolocation from 'react-native-geolocation-service';
import { useGetBetweenDistance } from '../../../api/store/store';
import Btn from '../../../components/Btn';
import { useTiemStore } from '../../../store';
import OrderConfirmPopUp from './orderModal/OrderConfirmPopUp';
import OrderResultPopUp from './orderModal/OrderResultPopUp';
import CountDownPage from './CountDownPage';


interface MyLocation {
  latitude: number;
  longitude: number;
}

const ProcessList: React.FC<PropsWithChildren<OrderMainNavProps<'OrderStatus'>>> = ({ navigation, route }) => {
  // Modal Open, close
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [location, setLocation] = useState<MyLocation>({
    latitude: 0,
    longitude: 0,
  });

  // Store
  const userStore = useTiemStore();

  // Api
  const {
    isLoading: orderStatusLoading,
    data: orderStatus,
    error: orderStatusError,
    refetch: refetchOrderStatus,
  } = useGetBetweenDistance(1, {lat : location.latitude ,lng:location.longitude },{ query: { enabled: true } });

  useRefreshOnFocus(refetchOrderStatus);

  useEffect(() => {
    getActiveLocation();
    if(typeof route.params?.pickUpAt === 'number'){
      userStore.doTimer(route.params.pickUpAt)
    }
  },[])

  const closeConfirm = () => {
    setConfirmOpen(false);
  };
  const closeResult = () => {
    setResultOpen(false);
  };

  const openCancle = () => {
  };

  const openResult = async () => {
    setConfirmOpen(false);
    setResultOpen(true);
  };

  const goReview = () => {
    setConfirmOpen(false);
  };
  const goOrderPage = () => {
    setConfirmOpen(false);
    setResultOpen(false);
    navigation.navigate('OrderTab');
  };

  const getActiveLocation = () => {
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

  if (!orderStatus || orderStatusLoading) {
    return <Loading />;
  }

  return (
    <Fragment className='bg-[#FFFFFF]'>
      <View className='flex-col items-center space-y-4 mt-20'>
        <Text className='font-suit-700 text-[27px] text-[#111111]'>픽업 대기중</Text>
        <Text className='font-suit-400 text-[14px] text-[#787878] mb-[20px]'>주문하신 음식이 기다리고 있어요!</Text>
        <Image
            source={require('../../../assets/images/order-status2.png')}
            className='w-[200px] h-[180px] mb-[20px]'
          />
        <View className='flex-row space-x-1'>
          <Text className='font-suit-700 text-[30px] text-[#00C1DE]'>
            <CountDownPage/>
          </Text>
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
        title={'제공 될 리워드입니다!'}
        subTitle={'어떠셨나요? :)'}
        go={goReview}
        goOrderPage={goOrderPage}
      />
    </Fragment>
  );
};

export default ProcessList;
