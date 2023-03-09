import React, { PropsWithChildren } from 'react';
import { RegisterNavProps } from '../../navigators';
import Fragment from '../../components/Fragment';
import { Image, Text, View } from 'react-native';
import Btn from '../../components/Btn';

const Success: React.FC<PropsWithChildren<RegisterNavProps<'Success'>>> = ({ navigation }) => {
  return (
    <Fragment>
      <View className="flex-1 justify-between">
        <View>
          <Text className="mt-[40px] font-suit-700 text-[30px] text-black leading-[40px]">OOOOOO님,</Text>
          <Text className="font-suit-700 text-[30px] text-black leading-[40px]">가입을 축하합니다!</Text>

          <Text className="mt-[16px] font-suit-400 text-[16px] text-[#787878] leading-[24px]">
            음식 포장하러 가면서 마일리지 쌓기
          </Text>
          <Text className="font-suit-400 text-[16px] text-[#787878] leading-[24px]">렛잇고와 함께해봐요!</Text>

          <View className="mt-[20px] relative items-center">
            <Image source={require('../../assets/images/register-bg.png')} className="w-[332.42px] h-[157.23px]" />
            <View className="absolute top-[111.23px] z-50 w-full items-center">
              <Image source={require('../../assets/images/register-img.png')} className="w-[261px] h-[209px]" />
            </View>
          </View>
        </View>

        <View>
          <Btn
            title="완료"
            className="mt-[30px] mb-[38px] py-[18px] bg-signature"
            fontSize={19}
            onPress={() => {
              navigation.popToTop();
              navigation.navigate('AuthHome');
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default Success;
