import React, { PropsWithChildren } from 'react';
import { HomeNavProps } from '../../../navigators/home/HomeParamList';
import { Text } from 'react-native';
import Fragment from '../../../components/Fragment';

interface SearchProps {}

const Search: React.FC<PropsWithChildren<HomeNavProps<'Search'>>> = () => {
  return (
    <Fragment>
      <Text>Search</Text>
    </Fragment>
  );
};

export default Search;
