import React, { PropsWithChildren,useState } from 'react';
import { OrderProcessNavProps } from '../../../navigators';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity,SafeAreaView,Image } from 'react-native';
import Fragment from '../../../components/Fragment';
import { useGetOnOrdersByUser } from '../../../api/order/order';
import useRefreshOnFocus from '../../../hooks/useRefreshOnFocus';
import Loading from '../../../components/Loading';
import { OrderListResp } from '../../../api/types';

const ProcessList: React.FC<PropsWithChildren<OrderProcessNavProps<'OrderProcess'>>> = () => {
  const [orderList, setOrderList] = useState()

  const {
    isLoading: ordersLoading,
    data: orders,
    error: ordersError,
    refetch: refetchorders,
  } = useGetOnOrdersByUser({ lastId: 0}, { query: { enabled: true } });

  useRefreshOnFocus(refetchorders);

  if (!orders) {
    // loading처리말고 mock데이터나 이미지 처리 필요
    return <Loading />;
  }


  return (
    // <Fragment className="flex-1 px-5 bg-[#F8F8F8]">
    //   <Text>{}</Text>
    // </Fragment>
    <Fragment className="flex-1 px-5 bg-[#F8F8F8]">
      <ScrollView>
          { orders.content?.map((order: OrderListResp, index: number) => {
              return (
                <SafeAreaView className="flex-1" key={index}>
                  <View className="justify-center items-center">
                    <View className="border1 mt-[20px] pl-[26px] pr-[26px] pt-[15px] pb-[15px] bg-[#FFFFFF] rounded-lg w-full shadow-lg shadow-indigo-500/40 ">
                      <Text>{order.orderAt}</Text>
                    </View>
                  </View>
                </SafeAreaView>
              );
            })}
      </ScrollView>
    </Fragment>
  );
};

export const OrderWrapper = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  CenterAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentsBox: {
    borderWidth: 1,
    marginTop: 20,
    sborderRadius: 1,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'white',
  },
  Vertical: {
    flexDirection: 'column',
  },
  Horizontal: {
    flexDirection: 'row',
  },
  ActivateButton: {
    backgroundColor: '#00C1DE',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    flex: 2,
  },
  cancleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderstyle: 'solid',
    borderColor: '#ee5960',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    flex: 2,
  },
  cancleButtonText: {
    fontSize: 17,
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ee5960',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  InActivateButton: {
    backgroundColor: '#3E3E3E',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  ButtonText: {
    fontSize: 17,
    fontFamily: 'Urbanist',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  FontText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    letterSpacing: 0.5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'background-color: rgba(0, 0, 0, 0.01)',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  StatusButton: {
    backgroundColor: '#3E3E3E',
    borderRadius: 8,
    width: 22,
    justifyContent: 'center',
    alignContent: 'center',
  },
  StatusText: {
    fontSize: 16,
    fontFamily: 'Urbanist',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  AddPhotoButtonText: {
    fontSize: 17,
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#00C1DE',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  AddPhotoButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderstyle: 'solid',
    borderColor: '#00C1DE',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    flex: 2,
  },
});

export default ProcessList;
