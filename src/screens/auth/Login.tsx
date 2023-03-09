import React, { PropsWithChildren } from 'react';
import { AuthNavProps } from '../../navigators';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const Login: React.FC<PropsWithChildren<AuthNavProps<'Login'>>> = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="default" />

      <View className="flex-1 w-full items-center justify-center border">
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
