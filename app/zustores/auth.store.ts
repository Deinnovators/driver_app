import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { rootNavigationRef } from '@app/lib/navigation/RootNavigation';
import { StorageKey } from '@app/lib/types/storage.types';
import zuStorage from '@app/zustores/zustorage';

interface AuthState {
  user?: any;
  token?: string;
  login: (user: any, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: undefined,
      token: '',
      login: (user: any, token: string) => {
        set({ user, token });
      },
      logout: () => {
        set({ user: undefined, token: '' });
        rootNavigationRef.current?.reset({
          index: 0,
          routes: [
            {
              name: 'Authentication',
            },
          ],
        });
      },
    }),

    {
      name: StorageKey.authStore,
      getStorage: () => zuStorage,
    },
  ),
);

export const useCurrentUser = () => useAuthStore(state => state.user);
export const useAuthToken = () => useAuthStore(state => state.token);
export const useLogin = () => useAuthStore(state => state.login);
export const useLogout = () => useAuthStore(state => state.logout);

export default useAuthStore;
