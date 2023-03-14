import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrderProcessParamList } from './OrderProcessParamList';

import OrderProcess from '../../screens/main/order/OrderProcess';

const Stack = createNativeStackNavigator<OrderProcessParamList>();

const OrderProcessNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="OrderProcess" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderProcess" component={OrderProcess} />
    </Stack.Navigator>
  );
};

export default OrderProcessNav;
