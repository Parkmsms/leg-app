import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

const TopTabBar: React.FC<PropsWithChildren<MaterialTopTabBarProps>> = props => {
  return (
    <SafeAreaView className="bg-white">
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};

export default TopTabBar;
