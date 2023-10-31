import { ThemeMode } from '@app/lib/types/string.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StorageKey } from '@app/lib/types/storage.types';
import zuStorage from '@app/zustores/zustorage';

interface AppState {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const useAppStore = create<AppState>()(
  persist(
    set => ({
      themeMode: 'light',
      toggleTheme: () =>
        set(state => ({
          themeMode: state.themeMode === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: StorageKey.appStore,
      getStorage: () => zuStorage,
    },
  ),
);

export const useThemeMode = () => useAppStore(state => state.themeMode);
export const useToggleTheme = () => useAppStore(state => state.toggleTheme);

export default useAppStore;
