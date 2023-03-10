import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, StyleProp, View, ViewStyle } from 'react-native';

interface FragmentProps {
  backgroundColor?: string;
}

const Fragment: React.FC<PropsWithChildren<FragmentProps>> = ({ children, backgroundColor }) => {
  return (
    <SafeAreaView className="flex-1 bg-white" style={{ backgroundColor }}>
      <StatusBar barStyle="default" />
      <View className="flex-1 px-5">{children}</View>
    </SafeAreaView>
  );
};

export default Fragment;
