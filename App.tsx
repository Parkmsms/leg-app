import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useUserStore, useNavigatorStore } from './src/store';
import { RootNav } from './src/navigators';

const App: React.FC = () => {
  const userStore = useUserStore();
  const { tabBarThemeBackground } = useNavigatorStore();
  const { getItem: getAccessToken } = useAsyncStorage('accessToken');
  const { getItem: getRefreshToken } = useAsyncStorage('refreshToken');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const accessToken = (await getAccessToken()) || undefined;
      const refreshToken = (await getRefreshToken()) || undefined;

      // userStore.accessToken, userStore.refreshToken 검증후 store에 등록해야함
      userStore.setUser({ accessToken, refreshToken });
    })();
  }, []);

  console.log('accessToken', userStore.accessToken);
  console.log('refreshToken', userStore.refreshToken);

  // lottie 작업 필요

  if (loading) {
    // return 스플레시 스크린
  }

  return (
    <NavigationContainer
      theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: tabBarThemeBackground } }}>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
