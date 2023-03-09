import React, { PropsWithChildren, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RegisterAddressNavProps } from '../../../navigators';
import Fragment from '../../../components/Fragment';
import RegisterForm from '../../../components/RegisterForm';
import CustomTextInput from '../../../components/CustomTextInput';

const Address: React.FC<PropsWithChildren<RegisterAddressNavProps<'Address'>>> = ({ navigation }) => {
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  const [search, setSearch] = useState('');

  const processIndex = navigation.getState().index + 1;
  const processLength = navigation.getState().routeNames.length - 1;

  return (
    <Fragment>
      <RegisterForm
        processIndex={processIndex}
        processLength={processLength}
        title="관심 있는 동네를 설정해 주세요."
        description="설정하신 지역 가게들을 모아서 보실 수 있어요!"
        nextBtnDisable={nextBtnDisable}
        onNextPress={() => navigation.navigate('Success')}>
        <View className="relative">
          <CustomTextInput
            width="100%"
            keyboardType="default"
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="건물명, 도로명 또는 지번으로 검색"
          />
          <View className="absolute right-[15px] h-full justify-center">
            <Image source={require('../../../assets/images/search-icon.png')} className="w-[20.31px] h-[20.31px]" />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          className="mt-[12px] border border-signature w-full py-[14px] rounded-lg flex-row justify-center items-center">
          <Text className="text-signature font-suit-500 text-[14px]">현재 위치로 주소 찾기</Text>
          <Image
            source={require('../../../assets/images/location-pin.png')}
            className="ml-[5px] w-[13px] h-[17.64px]"
          />
        </TouchableOpacity>
      </RegisterForm>
    </Fragment>
  );
};

export default Address;
