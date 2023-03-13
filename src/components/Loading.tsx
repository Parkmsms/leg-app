import React, { PropsWithChildren } from 'react';
import Fragment from './Fragment';
import { ActivityIndicator, View } from 'react-native';

const Loading: React.FC<PropsWithChildren> = () => {
  return (
    <Fragment className="px-5">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    </Fragment>
  );
};

export default Loading;
