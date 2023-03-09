import React, { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterAddressParamList } from '..';
import Address from '../../screens/register/registerAddress/Address';
import Map from '../../screens/register/registerAddress/Map';

const Stack = createNativeStackNavigator<RegisterAddressParamList>();

const RegisterNav: React.FC<PropsWithChildren> = () => {
  return (
    <Stack.Navigator initialRouteName="Address" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default RegisterNav;
