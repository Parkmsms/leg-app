import React, {useEffect, useState} from 'react';
import {Modal, Text, View, SafeAreaView,  TouchableOpacity} from 'react-native';
type BottomPopupProps = {
  open: boolean;
  close: any;
  title: string;
  subTitle: string;
  go: any;
  goOrderPage: any;
  orderFinish: any;
};


const OrderResultPopUp = (props: BottomPopupProps) => {
  const {open, close, title, subTitle, orderFinish} = props;
  const [isShow, setIsShow] = useState<boolean>(false);

  const goReview = () => {
    props.go();
  };
  const goOrderPage = () => {
    props.goOrderPage();
  };

  useEffect(() => {
    if (open) {
      setIsShow(true);
    } else if (close) {
      setIsShow(false);
    }
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal animationType={'slide'} transparent={true} visible={isShow} onRequestClose={close}>
        <View className='flex-1 items-center justify-center bg-[#000000AA]'>
          {/* Icon Area */}
          <View className='border-2 border-[#00C1DE] rounded-full top-4 bg-[#FFFFFF] p-2 z-10'>
            <Text className='font-suit-700 text-[#00C1DE] text-[16px]'>💬</Text>
          </View>
          {/* Text Area */}
          <View className={`w-5/6 bg-[#FFFFFF] rounded-lg p-10 items-center space-y-4`}>
            <Text className='font-suit-700 text-[#000000] text-[19px]'>{title}</Text>
            <Text className='font-suit-300 text-[#000000] text-[14px]'>{subTitle}</Text>
            <Text className='font-suit-700 text-[#000000] text0[14px]'>거리 : {orderFinish.distance}</Text>
            <Text className='font-suit-700 text-[#000000] text0[14px]'>총액 : {orderFinish.finalPrice}</Text>
            <Text className='font-suit-700 text-[#000000] text0[14px]'>리워드최장거리 : {orderFinish.maxRewardDistance}</Text>
            <Text className='font-suit-700 text-[#000000] text0[14px]'>환전비율 : {orderFinish.maxRewardRatio}</Text>
            <Text className='font-suit-700 text-[#000000] text0[14px]'>환전액 : {orderFinish.reward}</Text>

            <TouchableOpacity className='w-5/6 p-2 bg-[#00C1DE] rounded-lg items-center content-center justify-around' onPress={goOrderPage}>
              <Text className='font-suit-700 text-[#FFFFFF] text-[16px]'>확인</Text>
            </TouchableOpacity>

            <TouchableOpacity className='mt-[10px]' onPress={goReview} >
              <Text className='font-suit-700 text-[16px]'>리뷰쓰러 가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderResultPopUp;
