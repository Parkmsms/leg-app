import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderMainParamList } from './OrderMainParamList';
import OrderNav from '../order/OrderNav';
import OrderStatus from '../../screens/main/order/OrderStatus'


const Stack = createNativeStackNavigator<OrderMainParamList>();

const OrderMainNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="OrderTab" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="OrderTab" 
      options={{
        headerShown: false,
      }}
      component={OrderNav} />
      <Stack.Screen name="OrderStatus" 
      options={{
        title: '주문 현황',
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}component={OrderStatus}/>
    </Stack.Navigator>
  );
};

export default OrderMainNav;
