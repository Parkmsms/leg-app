import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { MainNavProps } from '../../navigators';
import Fragment from '../../components/Fragment';
import { useUserStore } from '../../store';
import { useGetAllKinds } from '../../api/kind/kind';
import useRefreshOnFocus from '../../hooks/useRefreshOnFocus';

const Home: React.FC<PropsWithChildren<MainNavProps<'Home'>>> = ({ navigation }) => {
  const { accessToken } = useUserStore();
  const { isLoading, data, error, refetch } = useGetAllKinds({ query: { enabled: Boolean(accessToken) } });

  useRefreshOnFocus(refetch); // focus될때마다 쿼리 불로오고 싶은 경우 이런식으로 사용함

  if (!isLoading) console.log(data);
  if (error) console.log(error);

  return (
    <Fragment>
      <Text>Home</Text>
    </Fragment>
  );
};

export default Home;
