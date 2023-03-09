import React, { PropsWithChildren } from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';
import Btn from './Btn';

interface PhoneProps {
  processIndex: number;
  processLength: number;
  title: string;
  description: string;
  onNextPress: (event: GestureResponderEvent) => void;
  nextBtnDisable: boolean;
}

const RegisterForm: React.FC<PropsWithChildren<PhoneProps>> = ({
  children,
  processIndex,
  processLength,
  title,
  description,
  nextBtnDisable,
  onNextPress,
}) => {
  //
  const btnBgColor = nextBtnDisable ? 'bg-[#BEF4FC]' : 'bg-signature';

  return (
    <View className="mt-[16px]">
      <Text className="text-right font-suit-400 text-[14px] text-[#B3B3B3] leading-[24px]">
        {processIndex}/{processLength}
      </Text>

      <Text className="mt-[7px] font-suit-600 text-[20px] text-[#101010] leading-[24px]">{title}</Text>
      <Text className="mt-[7px] font-suit-400 text-[14px] text-[#787878] leading-[24px] mb-[28px]">{description}</Text>

      {children}

      <Btn
        title="다음"
        className={`mt-[30px] py-[14px] ${btnBgColor}`}
        fontSize={16}
        onPress={onNextPress}
        disabled={nextBtnDisable}
      />
    </View>
  );
};

export default RegisterForm;
