import React, { PropsWithChildren } from 'react';
import { StatusBar, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FragmentProps {
  style?: StyleProp<ViewStyle>;
}

const Fragment: React.FC<PropsWithChildren<FragmentProps>> = ({ children, style }) => {
  return (
    <SafeAreaView className="flex-1 bg-white px-5" style={style}>
      <StatusBar barStyle="default" />
      {children}
    </SafeAreaView>
  );
};

export default Fragment;
