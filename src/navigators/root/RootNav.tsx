import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootParamList } from './RootParamList';
import { AuthNav, MainNav } from '..';

import { useUserStore } from '../../store';

const Stack = createNativeStackNavigator<RootParamList>();

const RootNav: React.FC<PropsWithChildren> = () => {
  const userStore = useUserStore();
  const initialRouteName = userStore.accessToken ? 'Main' : 'Auth';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNav} />
      <Stack.Screen name="Main" component={MainNav} />
    </Stack.Navigator>
  );
};

export default RootNav;
