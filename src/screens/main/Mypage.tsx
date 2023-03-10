import React, { PropsWithChildren } from 'react';
import { MainNavProps } from '../../navigators';
import { Text } from 'react-native';

import Fragment from '../../components/Fragment';
import Btn from '../../components/Btn';
import { useUserStore } from '../../store';

const Mypage: React.FC<PropsWithChildren<MainNavProps<'Mypage'>>> = ({ navigation }) => {
  const { accessToken, logout } = useUserStore();

  return (
    <Fragment>
      <Text>Mypage</Text>
      <Text className="my-4">{accessToken}</Text>
      <Btn
        title="logout"
        onPress={() => {
          logout();
          navigation.reset({ index: 0, routes: [{ name: 'Auth' }] });
        }}
      />
    </Fragment>
  );
};

export default Mypage;
