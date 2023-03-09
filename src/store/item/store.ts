export type Store = {
  cartItemList: any[];
  cartId: number;
  cartIdAdd: () => void; //카트에 상품 추가시 고유 cartId번호 부여
  pushCartList: () => void; //카트에 상품 추가
  deleteCartList: () => void; //카트에 상품 삭제
};
