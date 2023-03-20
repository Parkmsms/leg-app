import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderMainParamList } from './OrderMainParamList';
import OrderNav from '../order/OrderNav';
import OrderStatus from '../../screens/main/order/OrderStatus'
import ReviewWrite from '../../screens/main/review/ReviewWrite';


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
      <Stack.Screen name="ReviewWrite" 
      options={{
        title: '리뷰 작성',
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}component={ReviewWrite}/>
    </Stack.Navigator>
  );
};

export default OrderMainNav;
