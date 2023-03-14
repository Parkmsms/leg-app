import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeParamList } from './HomeParamList';
import HomeMain from '../../screens/main/home/homeMain/HomeMain';
import Search from '../../screens/main/home/Search';
import Detail from '../../screens/main/home/Detail';
import SelectMenu from '../../screens/main/home/SelectMenu';
import Order from '../../screens/main/home/Order';
import Cart from '../../screens/main/home/Cart';

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="HomeMain" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SelectMenu" component={SelectMenu} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeNav;
