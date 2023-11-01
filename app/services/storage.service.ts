import { MMKV } from 'react-native-mmkv';

type KeyValueTuple<T> = [key: string, value: T];
/**
 * A single storage instance.
 */
class _StorageService {
  private storage: MMKV;
  constructor() {
    this.storage = new MMKV({ id: 'sista-app' });
  }

  /**
   * Set json value for the given `key`.
   */
  setJSON(key: string, value: Record<string, any>): void {
    const item = JSON.stringify(value);
    this.storage.set(key, item);
  }

  /**
   * Get the json value for the given `key`, or `undefined` if it does not exist.
   *
   * @default undefined
   */
  getJSON(key: string): Record<string, any> | undefined {
    const item = this.storage.getString(key);
    return item && JSON.parse(item);
  }

  /**
   * Set multiple values at once.
   * Pass array of key-value paired tupples
   * @param keyValueTuples
   */
  multiSet<T extends string>(keyValueTuples: KeyValueTuple<T>[]): void {
    keyValueTuples.forEach(tuple => {
      if (typeof tuple[1] === 'number') {
        this.setNumber(tuple[0], tuple[1]);
      } else if (typeof tuple[1] === 'boolean') {
        this.setBoolean(tuple[0], tuple[1]);
      } else {
        this.setString(tuple[0], tuple[1]);
      }
    });
  }
  /**
   * Get values of multiple keys at once as key-value paired tuple.
   * @param keys
   * @returns KeyValueTuple[]
   */
  multiGet<T extends string>(keys: string[]): KeyValueTuple<T>[] {
    const result: KeyValueTuple<T>[] = [];
    for (let i = 0; i < keys.length; i++) {
      const value = this.getString(keys[i]);
      result.push([keys[i], value as any]);
    }
    return result;
  }

  /**
   * Set string value for the given `key`.
   */
  setString(key: string, value: string): void {
    this.storage.set(key, value);
  }

  /**
   * Get the string value for the given `key`, or `undefined` if it does not exist.
   *
   * @default undefined
   */
  getString(key: string): string | undefined {
    return this.storage.getString(key);
  }

  /**
   * Set number value for the given `key`.
   */
  setNumber(key: string, value: number): void {
    this.storage.set(key, value);
  }

  /**
   * Get the number value for the given `key`, or `undefined` if it does not exist.
   *
   * @default undefined
   */
  getNumber(key: string): number | undefined {
    return this.storage.getNumber(key);
  }

  /**
   * Set boolean value for the given `key`.
   */
  setBoolean(key: string, value: boolean): void {
    this.storage.set(key, value);
  }

  /**
   * Get the boolean value for the given `key`, or `undefined` if it does not exist.
   *
   * @default undefined
   */
  getBoolean(key: string): boolean | undefined {
    return this.storage.getBoolean(key);
  }

  /**
   * Get all keys.
   *
   * @default []
   */
  getAllkeys(): string[] {
    return this.storage.getAllKeys();
  }

  /**
   * Delete the given `key`.
   */
  delete(key: string) {
    this.storage.delete(key);
  }

  /**
   * Delete all keys.
   */
  clearAll() {
    this.storage.clearAll();
  }

  /**
   * Sets (or updates) the encryption-key to encrypt all data in this storage instance with.
   *
   * To remove encryption, pass `undefined` as a key.
   *
   * Encryption keys can have a maximum length of 16 bytes.
   */
  recrypt(key?: string) {
    this.storage.recrypt(key);
  }

  /**
   * Adds a value changed listener. The Listener will be called whenever any value
   * in this storage instance changes (set or delete).
   *
   * To unsubscribe from value changes, call the function returned.
   * @returns remove()
   */
  addOnValueChangeListener(onValueChanged: (key: string) => void): () => void {
    return this.storage.addOnValueChangedListener(onValueChanged).remove;
  }
}

const storageService = new _StorageService();
Object.freeze(storageService);

export default storageService;
