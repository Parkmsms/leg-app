import React, { PropsWithChildren } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrderParamList } from './OrderParamList';
import ProcessList from '../../screens/main/order/ProcessList';
import SuccessList from '../../screens/main/order/SuccessList';
import colors from '../../constants/colors';
import TopTabBar from './TopTabBar';

const Tab = createMaterialTopTabNavigator<OrderParamList>();

const OrderNav: React.FC<PropsWithChildren> = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProcessList"
      screenOptions={{
        tabBarLabelStyle: { fontFamily: 'SUIT-SemiBold', fontSize: 16 },
        tabBarIndicatorStyle: { height: 2, backgroundColor: colors.SIGNATURE },
        tabBarStyle: { height: 52, borderBottomWidth: 1, borderBottomColor: '#EDEDED' },
      }}
      tabBar={TopTabBar}>
      <Tab.Screen name="ProcessList" options={{ title: '주문 내역' }} component={ProcessList} />
      <Tab.Screen name="SuccessList" options={{ title: '완료 내역' }} component={SuccessList} />
    </Tab.Navigator>
  );
};

export default OrderNav;
