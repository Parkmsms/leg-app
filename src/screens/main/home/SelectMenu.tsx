import React, { PropsWithChildren } from 'react';
import { HomeNavProps } from '../../../navigators/home/HomeParamList';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';

interface SelectMenuProps {}

const SelectMenu: React.FC<PropsWithChildren<HomeNavProps<'SelectMenu'>>> = () => {
  return (
    <Fragment>
      <Text>SelectMenu</Text>
    </Fragment>
  );
};

export default SelectMenu;
