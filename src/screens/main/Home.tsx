import React, { PropsWithChildren } from 'react';
import { MainNavProps } from '../../navigators';
import { Text } from 'react-native';

import Fragment from '../../components/Fragment';
import { useGetAllKinds, useGetAllKindsInfinite } from '../../api/kind/kind';
import { useUserStore } from '../../store';
import { useIsFocused } from '@react-navigation/native';
import { setAccessToken } from '../../../axios-instance';
import Btn from '../../components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorageKeys from '../../constants/asyncStorageKeys';

const Home: React.FC<PropsWithChildren<MainNavProps<'Home'>>> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { accessToken } = useUserStore();
  const { isLoading, data, error, refetch } = useGetAllKinds({ query: { enabled: Boolean(accessToken && isFocused) } });

  if (!isLoading) console.log(data);
  if (error) console.log(error);

  return (
    <Fragment>
      <Text>Home</Text>
    </Fragment>
  );
};

export default Home;
