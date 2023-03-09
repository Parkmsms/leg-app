import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthParamList } from '..';

export type RegisterParamList = AuthParamList & {
  Phone: undefined;
  Nickname: undefined;
  RegisterAddress: undefined;
  Success: undefined;
};

export type RegisterNavProps<T extends keyof RegisterParamList> = {
  navigation: NativeStackNavigationProp<RegisterParamList, T>;
  route: RouteProp<RegisterParamList, T>;
};
