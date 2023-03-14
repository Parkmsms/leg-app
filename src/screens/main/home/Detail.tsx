import React, { PropsWithChildren } from 'react';
import { HomeNavProps } from '../../../navigators/home/HomeParamList';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';

interface DetailProps {}

const Detail: React.FC<PropsWithChildren<HomeNavProps<'Detail'>>> = () => {
  return (
    <Fragment>
      <Text>Detail</Text>
    </Fragment>
  );
};

export default Detail;
