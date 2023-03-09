import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    cartItemList: [],
    cartId: 0,

    cartIdAdd: () => {
      console.log('cartIdAdd');
    },
    pushCartList: () => {
      console.log('pushCartList');
    },
    deleteCartList: () => {
      console.log('deleteCartList');
    },
  }),
);

export default useStore;
