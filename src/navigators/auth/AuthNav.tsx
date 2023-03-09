import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthParamList } from './AuthParamList';

import Login from '../../screens/auth/Login';
import AuthHome from '../../screens/auth/AuthHome';
import { RegisterNav } from '..';

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="AuthHome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthHome" component={AuthHome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterNav} />
    </Stack.Navigator>
  );
};

export default AuthNav;
