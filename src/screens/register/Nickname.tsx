import React, { PropsWithChildren, useState } from 'react';
import { RegisterNavProps } from '../../navigators';
import Fragment from '../../components/Fragment';
import RegisterForm from '../../components/RegisterForm';
import CustomTextInput from '../../components/CustomTextInput';

const Nickname: React.FC<PropsWithChildren<RegisterNavProps<'Nickname'>>> = ({ navigation }) => {
  const [nextBtnDisable, setNextBtnDisable] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameWarn, setNicknameWarn] = useState(false);

  const processIndex = navigation.getState().index + 1;
  const processLength = navigation.getState().routeNames.length - 1;

  const registerNickname = () => {
    const duplicatedNickname = false; // 닉네임 중복 체크

    if (duplicatedNickname) return setNicknameWarn(true);
    navigation.navigate('RegisterAddress');
  };

  return (
    <Fragment className="px-5">
      <RegisterForm
        processIndex={processIndex}
        processLength={processLength}
        title="닉네임을 설정해 주세요."
        description="사장님과의 원할한 소통을 위해 사용할 닉네임을 지어주세요 :)"
        nextBtnDisable={nextBtnDisable}
        onNextPress={registerNickname}>
        <CustomTextInput
          width="100%"
          keyboardType="default"
          value={nickname}
          warn={nicknameWarn}
          warnMessage="이미 사용중인 닉네임입니다."
          setWarn={setNicknameWarn}
          onChangeText={text => setNickname(text)}
          placeholder="닉네임을 입력해주세요."
        />
      </RegisterForm>
    </Fragment>
  );
};

export default Nickname;
