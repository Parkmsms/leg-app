import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderCompleteParamList } from './OrderCompleteParamList';
import OrderSuccess from '../../screens/main/order/OrderSuccess';

const Stack = createNativeStackNavigator<OrderCompleteParamList>();

const OrderCompleteNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="OrderSuccess" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
    </Stack.Navigator>
  );
};

export default OrderCompleteNav;
