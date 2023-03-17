export { default as RootNav } from './root/RootNav';
export { default as AuthNav } from './auth/AuthNav';
export { default as RegisterNav } from './register/RegisterNav';
export { default as MainNav } from './main/MainNav';
export { default as RegisterAddressNav } from './registerAddress/RegisterAddressNav';

import { RootParamList, RootNavProps } from './root/RootParamList';
import { AuthParamList, AuthNavProps } from './auth/AuthParamList';
import { RegisterParamList, RegisterNavProps } from './register/RegisterParamList';
import { MainParamList, MainNavProps } from './main/MainParamList';
import { RegisterAddressParamList, RegisterAddressNavProps } from './registerAddress/RegisterAddressParamList';
import { OrderParamList,OrderNavProps } from './order/OrderParamList';
import { OrderMainNavProps, OrderMainParamList } from './orderMain/OrderMainParamList';

export type {
  RootParamList,
  RootNavProps,
  AuthParamList,
  AuthNavProps,
  RegisterParamList,
  RegisterNavProps,
  MainParamList,
  MainNavProps,
  RegisterAddressParamList,
  RegisterAddressNavProps,
  OrderParamList,
  OrderNavProps,
  OrderMainNavProps,
  OrderMainParamList,
};
