import React from 'react';
import { Image, View } from 'react-native';
import TabBarItem, { TabBarItemProps } from '../../components/TabBarItem';
import { TabBarProps } from './MainParamList';
import { useNavigatorStore } from '../../store';
import { twMerge } from 'tailwind-merge';

const BottomTabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const { tabBarDisplay, setTabBarThemeBackground } = useNavigatorStore();
  const containerClassName = twMerge(
    'flex-row justify-around items-center h-[86px] pb-[12px] rounded-t-3xl bg-white',
    tabBarDisplay ? 'flex' : 'hidden',
  );

  return (
    <View className={containerClassName} style={shadowStyle}>
      {tabBarItemList.map(({ key, tabBarThemeBackground, ...props }, index) => (
        <TabBarItem
          key={key}
          {...props}
          selected={index === state.index}
          onPress={() => {
            setTabBarThemeBackground(tabBarThemeBackground);
            navigation.navigate(key);
          }}
        />
      ))}
    </View>
  );
};

export default BottomTabBar;

const shadowStyle = {
  backgroundColor: 'white',
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 10,
};

const tabBarItemList: (TabBarItemProps & { tabBarThemeBackground: string })[] = [
  {
    key: 'Home',
    name: '홈',
    tabBarThemeBackground: 'white',
    icon: (
      <Image
        source={require('../../assets/images/tab/tab-home-icon.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
    iconSelected: (
      <Image
        source={require('../../assets/images/tab/tab-home-icon2.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
  },
  {
    key: 'Order',
    name: '주문 현황',
    tabBarThemeBackground: '#F8F8F8',
    icon: (
      <Image
        source={require('../../assets/images/tab/tab-order-icon.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
    iconSelected: (
      <Image
        source={require('../../assets/images/tab/tab-order-icon2.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
  },
  {
    key: 'Mypage',
    name: '마이페이지',
    tabBarThemeBackground: 'white',
    icon: (
      <Image
        source={require('../../assets/images/tab/tab-mypage-icon.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
    iconSelected: (
      <Image
        source={require('../../assets/images/tab/tab-mypage-icon2.png')}
        className="w-[24px] h-[24px]"
        style={{ resizeMode: 'contain' }}
      />
    ),
  },
];
