import React, { PropsWithChildren } from 'react';
import { MainNavProps } from '../../navigators';
import { Text } from 'react-native';

import Fragment from '../../components/Fragment';

const Home: React.FC<PropsWithChildren<MainNavProps<'Home'>>> = () => {
  return (
    <Fragment>
      <Text>Home</Text>
    </Fragment>
  );
};

export default Home;
