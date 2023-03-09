import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Phone from '../../screens/register/Phone';
import Nickname from '../../screens/register/Nickname';
import { RegisterParamList, RegisterAddressNav } from '..';
import Success from '../../screens/register/Success';

const Stack = createNativeStackNavigator<RegisterParamList>();

const RegisterNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="Phone" screenOptions={{ headerShown: false }}>
      {/* 순서 지켜서 작성 */}
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Nickname" component={Nickname} />
      <Stack.Screen name="RegisterAddress" component={RegisterAddressNav} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

export default RegisterNav;
