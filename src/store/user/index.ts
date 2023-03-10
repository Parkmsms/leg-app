import { create } from 'zustand';
import { Store } from './store';
import { removeAccessToken, setAccessToken } from '../../../axios-instance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorageKeys from '../../constants/asyncStorageKeys';

const useStore = create<Store>()(
  (set, _, { getState }): Store => ({
    // 임시
    setUser: async user => {
      if (user.accessToken) {
        await AsyncStorage.setItem(asyncStorageKeys.accessToken, user.accessToken);
        setAccessToken(user.accessToken);
      }
      set(state => ({ ...state, ...user }));
    },
    login: async (accessToken, refreshToken) => {
      await AsyncStorage.setItem(asyncStorageKeys.accessToken, accessToken);
      await AsyncStorage.setItem(asyncStorageKeys.refreshToken, refreshToken);
      setAccessToken(accessToken);

      set(state => ({ ...state, accessToken, refreshToken }));
    },
    logout: async () => {
      await AsyncStorage.removeItem(asyncStorageKeys.accessToken);
      await AsyncStorage.removeItem(asyncStorageKeys.refreshToken);
      removeAccessToken();

      set(state => ({ ...state, accessToken: undefined, refreshToken: undefined }));
    },
  }),
);

export default useStore;
