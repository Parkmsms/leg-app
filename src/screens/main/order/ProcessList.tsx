import React, { PropsWithChildren } from 'react';
import { OrderNavProps } from '../../../navigators/order/OrderParamList';
import { Text, View } from 'react-native';

const ProcessList: React.FC<PropsWithChildren<OrderNavProps<'ProcessList'>>> = () => {
  return (
    <View className="flex-1 px-5 bg-[#F8F8F8]">
      <Text>ProcessList</Text>
    </View>
  );
};

export default ProcessList;
