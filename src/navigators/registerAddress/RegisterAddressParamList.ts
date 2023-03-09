import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterParamList } from '..';

export type RegisterAddressParamList = RegisterParamList & {
  Address: undefined;
  Map: undefined;
};

export type RegisterAddressNavProps<T extends keyof RegisterAddressParamList> = {
  navigation: NativeStackNavigationProp<RegisterAddressParamList, T>;
  route: RouteProp<RegisterAddressParamList, T>;
};
