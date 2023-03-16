import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { MainParamList } from '..';

export type OrderMainParamList = MainParamList & {
  OrderTab:undefined
  OrderStatus:undefined
};

export type OrderMainNavProps<T extends keyof OrderMainParamList> = {
  navigation: MaterialTopTabNavigationProp<OrderMainParamList, T>;
  route: RouteProp<OrderMainParamList, T>;
};
