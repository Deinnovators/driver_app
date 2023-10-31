import { StateStorage } from 'zustand/middleware';
import { storageService } from '@app/services';

const zuStorage: StateStorage = {
  setItem: (name, value) => {
    return storageService.setString(name, value);
  },
  getItem: name => {
    const value = storageService.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storageService.delete(name);
  },
};

export default zuStorage;
