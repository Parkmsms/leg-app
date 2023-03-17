import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    minutes: 0,
    doTimer: (minute: number) => {
      console.log("들어온파라미터",minute)
      set(state => ({ ...state, minutes : minute }))},
    doEnd: async () => {
      console.log('doEnd');
    },
  }),
);

export default useStore;
