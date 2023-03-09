import React, { PropsWithChildren } from 'react';
import { MainNavProps } from '../../navigators';
import { Text, View } from 'react-native';
import { useNavigatorStore, useUserStore } from '../../store';
import Btn from '../../components/Btn';
import Fragment from '../../components/Fragment';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsZWciLCJpYXQiOjE2NzU3Nzc0NzksInN1YiI6IjAxODVlMmNjLTEzMjQtMzNmMy03YmU2LTdiZTJhN2NhMTAwYyIsInRva2VuVHlwZSI6dHJ1ZSwiYWNjb3VudFR5cGUiOiJVU0VSIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XX0.GVdNilnMSpL1fk0OKaE2LetKFiq0vShvOHWWHCeCGtTaCWnzOJUWj76Rp8v1B46eBKO1A8RqnaUIOceiRbT8xw';

const Mypage: React.FC<PropsWithChildren<MainNavProps<'Mypage'>>> = () => {
  const userStore = useUserStore();
  const { tabBarDisplay, setTabBarDisplay } = useNavigatorStore();

  return (
    <Fragment>
      <Text>Mypage</Text>

      <Btn title="Change tab state" onPress={() => setTabBarDisplay(!tabBarDisplay)} className="mt-2" />

      {userStore.accessToken ? (
        <Btn
          title="delete accessToken"
          onPress={() => userStore.setUser({ accessToken: undefined })}
          className="mt-2 py-2 bg-red-500"
        />
      ) : (
        <Btn
          title="set accessToken"
          onPress={() => userStore.setUser({ accessToken })}
          className="mt-2 py-2 bg-indigo-700"
        />
      )}

      <Text>{userStore.accessToken}</Text>
    </Fragment>
  );
};

export default Mypage;
