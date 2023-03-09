import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    minutes: 0,

    doTimer: () => {
      console.log('doTimer');
    },
    doEnd: () => {
      console.log('doEnd');
    },
  }),
);

export default useStore;
