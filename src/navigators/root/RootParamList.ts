import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootParamList = {
  Auth: undefined;
  Main: undefined;
};

export type RootNavProps<T extends keyof RootParamList> = {
  navigation: NativeStackNavigationProp<RootParamList, T>;
  route: RouteProp<RootParamList, T>;
};
