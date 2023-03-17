import React, { PropsWithChildren,useState } from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity,SafeAreaView,Image } from 'react-native';
import Fragment from '../../../../components/Fragment';
import { useGetOnOrdersByUser } from '../../../../api/order/order';
import useRefreshOnFocus from '../../../../hooks/useRefreshOnFocus';
import Loading from '../../../../components/Loading';
import { OrderListResp } from '../../../../api/types';
import { dateFilter } from '../OrderFilter';
import { OrderNavProps } from '../../../../navigators';

const ProcessList: React.FC<PropsWithChildren<OrderNavProps<'ProcessList'>>> = ({ navigation, route }) => {

  const {
    isLoading: ordersLoading,
    data: orders,
    error: ordersError,
    refetch: refetchorders,
  } = useGetOnOrdersByUser({ lastId: 0}, { query: { enabled: true } });

  useRefreshOnFocus(refetchorders);

  console.log(orders)


  if (!orders?.content?.length) {
    // loading처리말고 mock데이터나 이미지 처리 필요
    // return <Loading />;
    return (
      <View className='items-center '>
        <Image source={require('../../../../assets/images/emptyOrder.png')} className="w-100 h-100" />
        <Text className="font-suit-500">상품이 없어요 배고파요</Text>
      </View>
    )
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
                      <View className="flex-row space-x-1.5">
                        {order.status === "REQUEST" && (
                          <>
                            <Text className="font-suit-700 text-[18px] text-[#101010]">
                            포장대기
                            </Text>
                            <Text className="mt-[5px] font-suit-700 text-[11px] text-[#00C1DE] ">
                            </Text>
                          </>
                        )}
                        {order.status === "ACCEPT" && (
                          <>
                            <Text className="font-suit-700 text-[18px] text-[#101010]">
                            주문수락
                            </Text>
                            <Text className="mt-[5px] font-suit-700 text-[11px] text-[#00C1DE] ">
                            ⌛{dateFilter('pickUpAt', {date: order.pickUpAt})}
                            </Text>
                          </>
                        )}
                      </View>
                      <View className="flex-row space-x-3 mt-[10px]">
                        <Image
                          source={{uri: order.storeProfile ? order.storeProfile : 'none'}}
                          className="w-[100px] h-[80px] rounded-lg"
                          style={{ resizeMode: 'contain' }}
                        />
                        <View className="flex-col space-y-1.5">
                          <Text className='font-suit-500 text-[11px] text-[#B1B1B1]'>{dateFilter('orderAt', {date: order.orderAt})}</Text>
                          <Text className='font-suit-600 text-[15px] text-[#111111]'>{order.storeName}</Text>
                          <Text className='font-suit-400 text-[14px] text-[#111111]'>{order.simpleMenu}</Text>
                        </View>
                      </View>
                      <View className='flex-row space-x-4 mt-[10px]'>
                        {order.status === "REQUEST" &&
                          <>
                            <TouchableOpacity className='flex-1 w-20 border-[1px] rounded-lg border-rose-500 bg-[#FFFFFF] '>
                              <Text className="font-suit-700 text-center text-[15px] text-[#F43F5E] m-[8px]">주문 취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-1  ml-[10px] border-[1px #00C1DE] rounded-lg bg-[#00C1DE] '>
                              <Text className="font-suit-700 text-center text-[15px] text-[#FFFFFF] m-[8px]">주문 상세</Text>
                            </TouchableOpacity>
                          </>
                        }
                        {order.status === "ACCEPT" &&
                          <>
                            <TouchableOpacity 
                              onPress={()=>navigation.navigate('OrderStatus',{pickUpAt:dateFilter('storeTime',{date:order.pickUpAt})})}
                              className='flex-1 border-[1px #00C1DE] rounded-lg bg-[#00C1DE] '>
                              <Text className="font-suit-700 text-center text-[15px] text-[#FFFFFF] m-[8px]">주문 현황</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-1  ml-[10px] border-[1px #00C1DE] rounded-lg bg-[#00C1DE] '>
                              <Text className="font-suit-700 text-center text-[15px] text-[#FFFFFF] m-[8px]">주문 상세</Text>
                            </TouchableOpacity>
                          </>
                        }
                      </View>
                    </View>
                  </View>
                </SafeAreaView>
              );
            })}
      </ScrollView>
    </Fragment>
  );
};

export default ProcessList;
