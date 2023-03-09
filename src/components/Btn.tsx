import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface BtnProps extends TouchableOpacityProps {
  title: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  fontColor?: string;
  fontSize?: number;
}

const Btn: React.FC<PropsWithChildren<BtnProps>> = ({
  title,
  fontWeight,
  fontColor,
  fontSize,
  className,
  ...props
}) => {
  const mergedClassName = twMerge('bg-black w-full py-[18px] rounded-lg items-center', className);

  let textClassName = 'font-suit-700 text-white text-[19px]';
  if (fontWeight) textClassName = twMerge(textClassName, `font-suit-${fontWeight}`);
  if (fontColor) textClassName = twMerge(textClassName, `text-[${fontColor}]`);
  if (fontSize) textClassName = twMerge(textClassName, `text-[${fontSize}px]`);

  return (
    <TouchableOpacity className={mergedClassName} {...props}>
      <Text className={textClassName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
