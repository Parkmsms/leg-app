import React, {useEffect, useState} from 'react';
import {Modal, Text, View, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
type BottomPopupProps = {
  open: boolean;
  close: any;
  title: string;
  subTitle: string;
  openResult?: any;
  openCancle?: any;
  chgLocationing?:any;
};

const deviceHeight = Dimensions.get('window').height;
const OrderConfirmPopUp = (props: BottomPopupProps) => {
  const {open, close, title, subTitle} = props;
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setIsShow(true);
    } else if (close) {
      setIsShow(false);
    }
  });

  const pressAccept = async () => {
    switch (title) {
      case '포장받기 완료':
        props.openResult();
        break;
      case '주문 취소':
        props.openCancle();
        break;
      case '주소 변경':
        props.chgLocationing();
        break;
      case '선택한 주문내역을 삭제하시겠습니까?':
        props.openCancle();
    }
  };

  return (
    <SafeAreaView>
      <Modal animationType={'slide'} transparent={true} visible={isShow} onRequestClose={close}>
        <View className='flex-1 items-center justify-center bg-[#000000AA]'>
          {/* Icon Area */}
          <View className='border-2 border-[#00C1DE] rounded-full top-4 bg-[#FFFFFF] p-2 z-10'>
            <Text className='font-suit-700 text-[#00C1DE] text-[16px]'>💬</Text>
          </View>
          {/* Text Area */}
          <View className={`w-5/6 bg-[#FFFFFF] rounded-lg p-10 items-center space-y-4`}>
            <Text className='font-suit-700 text-[#000000] text-[15px]'>{title}</Text>
            <Text className='font-suit-300 text-[#000000] text-[11px]'>{subTitle}</Text>
            <TouchableOpacity className='w-5/6 p-2 bg-[#00C1DE] rounded-lg items-center content-center justify-around' onPress={pressAccept}>
              <Text className='font-suit-700 text-[#FFFFFF] text-[16px]'>예</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-[10px]' onPress={close} >
              <Text className='font-suit-700 text-[16px]'>아니오</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


export default OrderConfirmPopUp;
