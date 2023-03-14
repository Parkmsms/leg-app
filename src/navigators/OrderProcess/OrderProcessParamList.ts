import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderCompleteParamList } from '../OrderComplete/OrderCompleteParamList';

export type OrderProcessParamList =  OrderCompleteParamList &{
  OrderProcess: undefined;
};

export type OrderProcessNavProps<T extends keyof OrderProcessParamList> = {
  navigation: NativeStackNavigationProp<OrderProcessParamList, T>;
  route: RouteProp<OrderProcessParamList, T>;
};
