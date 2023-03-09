import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    setUser: user => set(state => ({ ...state, ...user })),
  }),
);

export default useStore;
