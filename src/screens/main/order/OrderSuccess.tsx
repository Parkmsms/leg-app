import React, { PropsWithChildren } from 'react';
import { OrderCompleteNavProps } from '../../../navigators';
import { Text, View } from 'react-native';

const SuccessList: React.FC<PropsWithChildren<OrderCompleteNavProps<'OrderSuccess'>>> = () => {
  return (
    <View className="flex-1 px-5 bg-[#F8F8F8]">
      <Text>SuccessList</Text>
    </View>
  );
};

export default SuccessList;
