import React, { PropsWithChildren } from 'react';
import { AuthNavProps } from '../../navigators';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Fragment from '../../components/Fragment';
import Btn from '../../components/Btn';
import { useUserStore } from '../../store';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import asyncStorageKeys from '../../constants/asyncStorageKeys';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsZWciLCJpYXQiOjE2NzU3Nzc0NzksInN1YiI6IjAxODVlMmNjLTEzMjQtMzNmMy03YmU2LTdiZTJhN2NhMTAwYyIsInRva2VuVHlwZSI6dHJ1ZSwiYWNjb3VudFR5cGUiOiJVU0VSIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XX0.GVdNilnMSpL1fk0OKaE2LetKFiq0vShvOHWWHCeCGtTaCWnzOJUWj76Rp8v1B46eBKO1A8RqnaUIOceiRbT8xw';

const Login: React.FC<PropsWithChildren<AuthNavProps<'Login'>>> = ({ navigation }) => {
  const userStore = useUserStore();
  const { getItem } = useAsyncStorage(asyncStorageKeys.accessToken);

  return (
    <Fragment>
      <Btn
        title="임시 로그인"
        onPress={async () => {
          await userStore.login(accessToken, '');
          if (await getItem()) navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
        }}
        className="mt-2 bg-indigo-700 w-full"
      />

      <Text>{userStore.accessToken}</Text>
    </Fragment>
  );
};

export default Login;
