import React, { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AuthNavProps } from '../../navigators';
import Fragment from '../../components/Fragment';
import colors from '../../constants/colors';
import Btn from '../../components/Btn';

const AuthHome: React.FC<PropsWithChildren<AuthNavProps<'AuthHome'>>> = ({ navigation }) => {
  return (
    <Fragment style={{ backgroundColor: colors.SIGNATURE }}>
      <View className="flex-1 w-full items-center justify-center">
        <View className="w-full items-center mt-10">
          <Image source={require('../../assets/images/logo-white.png')} className="w-[252px] h-[56px]" />
          <Text className="font-suit-600 mt-[13px] text-white font-semibold text-[20px] drop-shadow-2xl">
            음식 포장하러 가는중~
          </Text>
          <Image
            source={require('../../assets/images/auth-home-img.png')}
            className="mt-[36px] w-[214.69px] h-[170px]"
          />
          <Btn title="포장하기" onPress={() => navigation.navigate('Register')} className="mt-[138px]" />

          <View className="flex-row mt-[38px]">
            <Text className="text-white">이미 계정이 있나요?</Text>
            <TouchableOpacity className="ml-[6px]" onPress={() => navigation.navigate('Login')}>
              <Text className="font-suit-700 text-white underline">로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default AuthHome;
