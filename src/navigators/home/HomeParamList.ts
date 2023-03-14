import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { MainParamList } from '..';

export type HomeParamList = MainParamList & {
  HomeMain: undefined;
  Search: undefined;
  Detail: undefined;
  SelectMenu: undefined;
  Order: undefined;
  Cart: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: MaterialTopTabNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
