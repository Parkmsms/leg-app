import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Image, KeyboardTypeOptions, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  width?: number | string;
  height?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  marginTop?: number;
  px?: string;
  py?: string;
  placeholder?: string;
  placeholderColor?: string;
  keyboardType?: KeyboardTypeOptions;
  warn?: boolean;
  setWarn?: React.Dispatch<React.SetStateAction<boolean>>;
  borderColor?: string;
  warnColor?: string;
  warnMessage?: string;
}

const CustomTextInput: React.FC<PropsWithChildren<CustomTextInputProps>> = ({
  width,
  value,
  onChangeText,
  marginTop,
  placeholder,
  keyboardType,
  warn,
  setWarn,
  warnMessage,
  fontWeight,
  //
  color = 'black',
  px = 15,
  py = 0,
  fontSize = 16,
  placeholderColor = '#b1b1b2',
  borderColor = '#00C1DE',
  warnColor = '#ff4d4d',
  backgroundColor = '#F2F4F7',
  height = 52,
}) => {
  const textInputRef = useRef<TextInput>(null);
  const [focus, setFocus] = useState(false);
  const fontFamilyClassName = fontWeight ? `font-suit-${fontWeight}` : 'font-suit-400';

  useEffect(() => {
    if (warn) textInputRef.current?.focus();
  }, [warn]);

  // twMerge 사용해서 코드 수정하기
  return (
    <>
      <View
        className={`${!width && 'flex-1'} relative justify-center rounded-lg`}
        style={{ marginTop, width, height, backgroundColor }}>
        {Boolean(placeholder) && (
          <TouchableOpacity
            className={`absolute z-50 w-full h-full justify-center rounded-lg  ${value ? 'hidden' : 'flex'}`}
            style={{ paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py }}
            onPress={() => textInputRef.current?.focus()}>
            <Text className={fontFamilyClassName} style={{ fontSize, color: placeholderColor }}>
              {placeholder}
            </Text>
          </TouchableOpacity>
        )}

        <TextInput
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
          ref={textInputRef}
          keyboardType={keyboardType}
          className={`absolute z-0 w-full h-full rounded-lg ${fontFamilyClassName}`}
          style={{
            color,
            borderWidth: warn || focus ? 1 : 0,
            borderColor: warn ? warnColor : borderColor,
            paddingLeft: px,
            paddingRight: px,
            paddingTop: py,
            paddingBottom: py,
          }}
          value={value}
          onChangeText={text => {
            if (setWarn) setWarn(false);
            onChangeText(text);
          }}
        />
      </View>
      {warn && warnMessage && (
        <View className="mt-[8px] flex-row">
          <Image source={require('../assets/images/alert-circle.png')} className="w-[16px] h-[16px] mr-[4px]" />
          <Text className="font-suit-400 text-[13px] text-[#ff4d4d]">{warnMessage}</Text>
        </View>
      )}
    </>
  );
};

export default CustomTextInput;
