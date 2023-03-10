import React, { PropsWithChildren } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainParamList, TabBarProps } from './MainParamList';
import { useNavigatorStore } from '../../store';

import Home from '../../screens/main/Home';
import BottomTabBar from './BottomTabBar';
import Mypage from '../../screens/main/Mypage';
import OrderNav from '../order/OrderNav';

const Tab = createBottomTabNavigator<MainParamList>();

const MainNav: React.FC<PropsWithChildren> = () => {
  const { tabBarDisplay } = useNavigatorStore();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarStyle: { display: tabBarDisplay ? 'flex' : 'none' }, headerShown: false }}
      tabBar={props => <BottomTabBar {...(props as TabBarProps)} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={OrderNav} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

export default MainNav;
