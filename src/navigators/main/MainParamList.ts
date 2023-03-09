import { RouteProp } from '@react-navigation/native';
import { BottomTabBarProps, BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootParamList } from '..';

type DefaultMainParamList = RootParamList & {
  Home: undefined;
  Order: undefined;
  Mypage: undefined;
};
export type TabBarProps = BottomTabBarProps & BottomTabScreenProps<MainParamList>;
export type BottomTabKeyType = keyof DefaultMainParamList;

export type MainParamList = RootParamList & DefaultMainParamList;

export type MainNavProps<T extends keyof MainParamList> = {
  navigation: BottomTabNavigationProp<MainParamList, T>;
  route: RouteProp<MainParamList, T>;
};
