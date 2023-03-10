import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useUserStore, useNavigatorStore } from './src/store';
import { RootNav } from './src/navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import asyncStorageKeys from './src/constants/asyncStorageKeys';
import { ActivityIndicator, Text, View } from 'react-native';
import sleep from './src/functions/sleep';
import Fragment from './src/components/Fragment';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const userStore = useUserStore();
  const { tabBarThemeBackground } = useNavigatorStore();
  const { getItem: getAccessToken } = useAsyncStorage(asyncStorageKeys.accessToken);
  const { getItem: getRefreshToken, setItem: setRefreshToken } = useAsyncStorage(asyncStorageKeys.refreshToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // refresh토큰이 없으므로 임시값 설정
      await setRefreshToken('temp');

      const accessToken = (await getAccessToken()) || undefined;
      const refreshToken = (await getRefreshToken()) || undefined;

      // userStore.accessToken, userStore.refreshToken 검증후 store에 등록해야함
      if (accessToken && refreshToken) userStore.login(accessToken, refreshToken);
      await sleep(1); // 스플래시 시간
      setLoading(false);
    })();
  }, []);

  // lottie 작업 필요

  if (loading) {
    // default 스플래시 시크린 삭제
    // return 스플래시 스크린으로 바꿔주기
    return (
      <Fragment>
        <View className="flex-1 items-center justify-center">
          <Text>스플래쉬</Text>
        </View>
      </Fragment>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: tabBarThemeBackground } }}>
        <RootNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
