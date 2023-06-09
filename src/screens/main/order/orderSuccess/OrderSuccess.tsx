import React, { PropsWithChildren,useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { useGetOffOrdersByUser } from '../../../../api/order/order';
import useRefreshOnFocus from '../../../../hooks/useRefreshOnFocus';
import Loading from '../../../../components/Loading';
import Fragment from '../../../../components/Fragment';
import { OrderListResp } from '../../../../api/types';
import { dateFilter } from '../OrderFilter';
import { OrderNavProps } from '../../../../navigators';
import BottomSheet from '../orderModal/BottomModal';
import OrderConfirmModal from '../orderModal/ConfirmModal';
import OrderAlertPopup from '../orderModal/AlertModal';
import { useIsFocused } from '@react-navigation/native';

const SuccessList: React.FC<PropsWithChildren<OrderNavProps<'CompleteList'>>> = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [focused, setFocused] = useState<boolean>(isFocused);
  const [modalVisible, setModalVisible] = useState(false);
  //Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string>('');

  const {
    isLoading: ordersLoading,
    data: orders,
    error: ordersError,
    refetch: refetchorders,
  } = useGetOffOrdersByUser({ lastId: 0}, { query: { enabled: true } });

  useRefreshOnFocus(refetchorders);

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

  const closeModal = () => {
    setModalOpen(false);
  };

  const openCancle = async () => {
    setModalOpen(false);
    setAlertOpen(true);
  };

  //현재화면 새로고침
  const refresh = () => {
    setAlertOpen(false);
    setFocused(val => (val = !val));
  };

  const goDelete = () => {
    setModalOpen(true);
  }


  return (
    // <Fragment className="flex-1 px-5 bg-[#F8F8F8]">
    //   <Text>{}</Text>
    // </Fragment>
    <Fragment className="flex-1 px-5 bg-[#F8F8F8]">
      <ScrollView showsVerticalScrollIndicator={false}>
          { orders.content?.map((order: OrderListResp, index: number) => {
              return (
                <SafeAreaView className="flex-1" key={index}>
                  <View className="justify-center items-center">
                    <View className="border1 mt-[20px] pl-[26px] pr-[26px] pt-[15px] pb-[15px] bg-[#FFFFFF] rounded-lg w-full shadow-lg shadow-indigo-500/40 ">
                      <View className="flex-row space-x-1.5 justify-between">
                        {order.status === "DONE" && (
                          <>
                            <Text className=" font-suit-700 text-[15px] text-[#101010]">
                            주문 완료
                            </Text>
                          </>
                        )}
                        {order.status === "USER_CANCEL" && (
                          <>
                            <Text className="font-suit-700 text-[15px] text-[#101010]">
                            주문 취소
                            </Text>
                          </>
                        )}
                        <TouchableOpacity 
                          onPress={()=>{ 
                            setModalVisible(true)
                            setSelectedItemId(order.orderNo)
                            }}>
                          <Text>☰</Text>
                        </TouchableOpacity>
                      </View>
                      <View className="flex-row space-x-3 mt-[10px]">
                        <Image
                          source={{uri: order.storeProfile ? order.storeProfile : 'none'}}
                          className="w-[100px] h-[80px] rounded-lg"
                          style={{ resizeMode: 'contain' }}
                        />
                        <View className="flex-col space-y-1.5">
                          <Text className='font-suit-500 text-[11px] text-[#B1B1B1]'>{dateFilter('doneAt', {date: order.doneAt})}</Text>
                          <Text className='font-suit-600 text-[15px] text-[#111111]'>{order.storeName}</Text>
                          <Text className='font-suit-400 text-[14px] text-[#111111]'>{order.simpleMenu}</Text>
                        </View>
                      </View>
                      <View className='flex-row space-x-4 mt-[10px]'>
                        {order.status === "USER_CANCEL" &&
                          <>
                            <TouchableOpacity className='flex-1 border-2 border-[#00C1DE] rounded-lg bg-[#00C1DE] '>
                              <Text className="font-suit-700 text-center text-[13px] text-[#FFFFFF] m-[10px]">주문 상세</Text>
                            </TouchableOpacity>
                          </>
                        }
                        {order.status === "DONE" &&
                          <>
                            <TouchableOpacity 
                            onPress={()=>{ navigation.navigate('ReviewWrite') }}
                            className={order.isReviewed===true ? 
                              'flex-1 border-[1px] border-[#999999] rounded-lg bg-[#D9D9D9] ' : 
                              'flex-1 border-[1px] border-[#00C1DE] rounded-lg bg-[#FFFFFF] ' 
                              }
                            disabled={order.isReviewed===true ? true:false}>
                              <Text className={order.isReviewed === true ? 
                                "font-suit-700 text-center text-[13px] text-[#999999] m-[10px]" : 
                                "font-suit-700 text-center text-[13px] text-[#00C1DE] m-[10px]" 
                                }>리뷰 쓰기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-1  ml-[10px] border-[1px #00C1DE] rounded-lg bg-[#00C1DE] '>
                              <Text className="font-suit-700 text-center text-[13px] text-[#FFFFFF] m-[10px]">주문 상세</Text>
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
      <BottomSheet
        clssName='justify-center items-center flex-1'
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        goDelete = {goDelete}
      />
      <OrderConfirmModal
        open={modalOpen}
        close={closeModal}
        title={'선택한 주문내역을 삭제하시겠습니까?'}
        subTitle={`삭제 후에는 복구할 수 없습니다.`}
        openCancle={openCancle}
      />
      <OrderAlertPopup
        open={alertOpen}
        close={closeModal}
        title={'삭제 완료'}
        refresh={refresh}
      />
    </Fragment>
  );
};


export default SuccessList;
