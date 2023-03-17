import React, {useEffect, useState} from 'react';
import {Modal, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
type BottomPopupProps = {
  open: boolean;
  close: any;
  title: string;
  refresh: any;
};

const OrderAlertPopup = (props: BottomPopupProps) => {
  const {open, close, title} = props;
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setIsShow(true);
    } else if (close) {
      setIsShow(false);
    }
  });

  const pressAccept = async () => {
    props.refresh();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal animationType={'slide'} transparent={true} visible={isShow} onRequestClose={close}>
        <View className='flex-1 items-center justify-center bg-[#000000AA]'>
         {/* Icon Area */}
          <View className='border-2 border-[#00C1DE] rounded-full top-4 bg-[#FFFFFF] p-2 z-10'>
            <Text className='font-suit-700 text-[#00C1DE] text-[16px]'>💬</Text>
          </View>
          <View className={`w-5/6 bg-[#FFFFFF] rounded-lg p-10 items-center space-y-4`}>
            <Text className='font-suit-700 text-[#000000] text-[19px]'>{title}</Text>
            <TouchableOpacity className='w-5/6 p-2 bg-[#00C1DE] rounded-lg items-center content-center justify-around' onPress={pressAccept}>
              <Text className='font-suit-700 text-[#FFFFFF] text-[16px]'>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderAlertPopup;
