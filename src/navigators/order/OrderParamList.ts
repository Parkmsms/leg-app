import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { MainParamList } from '..';
import { OrderMainParamList } from '../orderMain/OrderMainParamList';

export type OrderParamList = OrderMainParamList & {
  ProcessList: undefined;
  CompleteList: undefined;
};

export type OrderNavProps<T extends keyof OrderParamList> = {
  navigation: MaterialTopTabNavigationProp<OrderParamList, T>;
  route: RouteProp<OrderParamList, T>;
};
