import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    minutes: 0,
    doTimer: (minute: number) => set(state => ({ ...state, minutes : minute })),
    doEnd: async () => {
      console.log('doEnd');
    },
  }),
);

export default useStore;
