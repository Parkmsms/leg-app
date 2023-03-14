import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderParamList } from '../order/OrderParamList';

export type OrderCompleteParamList =  OrderParamList& {
  OrderSuccess: undefined;
};

export type OrderCompleteNavProps<T extends keyof OrderCompleteParamList> = {
  navigation: NativeStackNavigationProp<OrderCompleteParamList, T>;
  route: RouteProp<OrderCompleteParamList, T>;
};
