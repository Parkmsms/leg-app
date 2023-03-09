import React, { PropsWithChildren } from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { OrderParamList } from './OrderParamList';
import ProcessList from '../../screens/main/order/ProcessList';
import SuccessList from '../../screens/main/order/SuccessList';
import { SafeAreaView } from 'react-native';
import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator<OrderParamList>();

const OrderNav: React.FC<PropsWithChildren> = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProcessList"
      screenOptions={{
        tabBarLabelStyle: { fontFamily: 'SUIT-SemiBold', fontSize: 16 },
        tabBarIndicatorStyle: { height: 2, backgroundColor: colors.SIGNATURE },
        tabBarStyle: {
          height: 52,
          borderBottomWidth: 1,
          borderBottomColor: '#EDEDED',
        },
      }}
      tabBar={props => (
        <SafeAreaView>
          <MaterialTopTabBar {...props} />
        </SafeAreaView>
      )}>
      <Tab.Screen name="ProcessList" options={{ title: '주문 내역' }} component={ProcessList} />
      <Tab.Screen name="SuccessList" options={{ title: '왼료 내역' }} component={SuccessList} />
    </Tab.Navigator>
  );
};

export default OrderNav;
