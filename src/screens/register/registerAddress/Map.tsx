import React, { PropsWithChildren } from 'react';
import { RegisterAddressNavProps } from '../../../navigators';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';
import Btn from '../../../components/Btn';

const Map: React.FC<PropsWithChildren<RegisterAddressNavProps<'Map'>>> = ({ navigation }) => {
  return (
    <Fragment className="px-5">
      <Text>상세주소 설정 페이지</Text>
      <Btn title="다음" onPress={() => navigation.goBack()} className="py-[14px] bg-signature" fontSize={16} />
    </Fragment>
  );
};

export default Map;
