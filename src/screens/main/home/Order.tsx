import React, { PropsWithChildren } from 'react';
import { HomeNavProps } from '../../../navigators/home/HomeParamList';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';

interface OrderProps {}

const Order: React.FC<PropsWithChildren<HomeNavProps<'Order'>>> = () => {
  return (
    <Fragment>
      <Text>Order</Text>
    </Fragment>
  );
};

export default Order;
