import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { MainParamList } from '..';

export type OrderParamList = MainParamList & {
  ProcessList: undefined;
  CompleteList: undefined;
};

export type OrderNavProps<T extends keyof OrderParamList> = {
  navigation: MaterialTopTabNavigationProp<OrderParamList, T>;
  route: RouteProp<OrderParamList, T>;
};
