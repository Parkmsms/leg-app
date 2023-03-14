import React, { PropsWithChildren } from 'react';
import { HomeNavProps } from '../../../navigators/home/HomeParamList';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';

interface CartProps {}

const Cart: React.FC<PropsWithChildren<HomeNavProps<'Cart'>>> = () => {
  return (
    <Fragment>
      <Text>Order</Text>
    </Fragment>
  );
};

export default Cart;
