import React, { PropsWithChildren, useState } from 'react';
import { Text } from 'react-native';

import { HomeNavProps } from '../../../../navigators/home/HomeParamList';
import Fragment from '../../../../components/Fragment';
import { useUserStore } from '../../../../store';
import { useGetAllKinds } from '../../../../api/kind/kind';
import useRefreshOnFocus from '../../../../hooks/useRefreshOnFocus';
import Loading from '../../../../components/Loading';
import { PostCursorReq } from '../../../../api/types';
import { useGetPosts } from '../../../../api/post/post';
import { useGetBannerList } from '../../../../api/banner/banner';
import { useGetActiveLocation } from '../../../../api/user-location/user-location';

const HomeMain: React.FC<PropsWithChildren<HomeNavProps<'HomeMain'>>> = ({ navigation }) => {
  const { accessToken } = useUserStore();
  const [reqDto, setReqDto] = useState<PostCursorReq>({ foodType: '전체', search: '', sort: 'DISTANCE', lastId: 0 });
  const {
    isLoading: kindsLoading,
    data: kinds,
    error: kindsError,
    refetch: refetchKinds,
  } = useGetAllKinds({ query: { enabled: Boolean(accessToken) } });
  const {
    isLoading: postsLoading,
    data: posts,
    error: postsError,
    refetch: refetchPosts,
  } = useGetPosts(reqDto, { query: { enabled: true } });
  const {
    isLoading: bannerLoading,
    data: banner,
    error: bannerError,
    refetch: refetchBanner,
  } = useGetBannerList({ query: { enabled: true } });
  const {
    isLoading: activeLocationLoading,
    data: activeLocation,
    error: activeLocationError,
    refetch: refetchActiveLocation,
  } = useGetActiveLocation({ query: { enabled: true } });

  // focus될때마다 쿼리 불로오고 싶은 경우 이런식으로 사용함
  useRefreshOnFocus(refetchKinds);
  useRefreshOnFocus(refetchPosts);
  useRefreshOnFocus(refetchBanner);
  useRefreshOnFocus(refetchActiveLocation);

  // console.log(kinds);
  // console.log(banner);
  // console.log(posts);
  // console.log(activeLocation);

  if (kindsLoading || postsLoading || bannerLoading || activeLocationLoading) {
    // loading처리말고 mock데이터나 이미지 처리 필요
    return <Loading />;
  }

  return (
    <Fragment className="px-5">
      <Text>Home</Text>
    </Fragment>
  );
};

export default HomeMain;
