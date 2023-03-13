import React, { PropsWithChildren } from 'react';
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

interface FragmentProps extends SafeAreaViewProps {}

const Fragment: React.FC<PropsWithChildren<FragmentProps>> = ({ children, className, ...props }) => {
  const containerClassName = twMerge('flex-1 bg-white', className);
  return (
    <SafeAreaView className={containerClassName} {...props}>
      <StatusBar barStyle="default" />
      <View className="flex-1">{children}</View>
    </SafeAreaView>
  );
};

export default Fragment;
