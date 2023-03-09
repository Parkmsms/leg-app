import React, { PropsWithChildren } from 'react';
import { OrderNavProps } from '../../../navigators/order/OrderParamList';
import { Text, View } from 'react-native';

const SuccessList: React.FC<PropsWithChildren<OrderNavProps<'SuccessList'>>> = () => {
  return (
    <View className="flex-1 px-5 bg-[#F8F8F8]">
      <Text>SuccessList</Text>
    </View>
  );
};

export default SuccessList;
