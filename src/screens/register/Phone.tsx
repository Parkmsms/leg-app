import React, { PropsWithChildren, useState } from 'react';
import { View } from 'react-native';
import { RegisterNavProps } from '../../navigators';
import Fragment from '../../components/Fragment';
import RegisterForm from '../../components/RegisterForm';
import CustomTextInput from '../../components/CustomTextInput';
import Btn from '../../components/Btn';

const Phone: React.FC<PropsWithChildren<RegisterNavProps<'Phone'>>> = ({ navigation, route }) => {
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [certNum, setCertNum] = useState('');
  const processIndex = navigation.getState().index + 1;
  const processLength = navigation.getState().routeNames.length - 1;

  const verifyPhone = () => {
    console.log('verifyPhone');
  };

  return (
    <Fragment>
      <RegisterForm
        processIndex={processIndex}
        processLength={processLength}
        title="번호 인증을 해주세요."
        description="본인 인증을 위해 필요합니다."
        nextBtnDisable={nextBtnDisable}
        onNextPress={() => navigation.navigate('Nickname')}>
        <View className="flex-row">
          <CustomTextInput
            keyboardType="number-pad"
            value={phoneNum}
            onChangeText={text => setPhoneNum(text)}
            placeholder="- 빼고 입력해주세요"
          />

          <Btn
            title="인증 요청"
            className="bg-signature w-[97px] h-[52px] ml-[8px]"
            fontSize={14}
            onPress={verifyPhone}
            disabled={nextBtnDisable}
          />
        </View>

        <CustomTextInput
          marginTop={12}
          width="100%"
          keyboardType="number-pad"
          value={certNum}
          onChangeText={text => setCertNum(text)}
          placeholder="인증번호를 입력하세요."
        />
      </RegisterForm>
    </Fragment>
  );
};

export default Phone;
