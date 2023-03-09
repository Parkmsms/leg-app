import { create } from 'zustand';
import { Store } from './store';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    tabBarThemeBackground: 'white',
    tabBarDisplay: true,
    setTabBarThemeBackground: (tabBarThemeBackground: string) => set(state => ({ ...state, tabBarThemeBackground })),
    setTabBarDisplay: tabBarDisplay => set(state => ({ ...state, tabBarDisplay })),
  }),
);

export default useStore;
