import React, { PropsWithChildren } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { BottomTabKeyType } from '../navigators/main/MainParamList';

export interface TabBarItemProps {
  key: BottomTabKeyType;
  name: string;
  icon: JSX.Element;
  iconSelected: JSX.Element;
  selected?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const TabBarItem: React.FC<PropsWithChildren<TabBarItemProps>> = ({ icon, iconSelected, name, selected, onPress }) => {
  return (
    <Pressable className="items-center justify-center w-20" onPress={onPress}>
      {selected ? iconSelected : icon}
      <Text className={`mt-[6px] font-suit-600 ${selected ? 'text-signature' : 'text-[#BFCDD8]'}`}>{name}</Text>
    </Pressable>
  );
};

export default TabBarItem;
