import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  MMKV,
  useMMKVBoolean,
  useMMKVNumber,
  useMMKVString,
} from 'react-native-mmkv';

/**
 * useStorageString -
 * This hook will act as useState hook.
 * @param key can be any string
 * @param instance MMKV storage instance | undefined
 * @returns tuple of value of the key as string and a function to update the value.
 */
export const useStorageString = (key: string, instance?: MMKV) =>
  useMMKVString(key, instance);

/**
 * useStorageNumber -
 * This hook will act as useState hook.
 * @param key can be any string
 * @param instance MMKV storage instance | undefined
 * @returns tuple of value of the key as number and a function to update the value.
 */
export const useStorageNumber = (key: string, instance?: MMKV) =>
  useMMKVNumber(key, instance);

/**
 * useStorageBoolean -
 * This hook will act as useState hook.
 * @param key can be any string
 * @param instance MMKV storage instance | undefined
 * @returns tuple of value of the key as boolean and a function to update the value.
 */
export const useStorageBoolean = (key: string, instance?: MMKV) =>
  useMMKVBoolean(key, instance);

type JsonType = Record<string, any>;

/**
 * useStorageJSON -
 * This hook will act as default useState hook.
 * @param key can be any string
 * @param instance MMKV storage instance | undefined
 * @returns tuple of value of the key as js object and a function to update the value.
 */
export const useStorageJSON = (
  key: string,
  instance?: MMKV,
): [JsonType | undefined, Dispatch<SetStateAction<JsonType>>] => {
  const [jsonValue, setJsonValue] = useState<JsonType>();
  const [value, setValue] = useStorageString(key, instance);

  useEffect(() => {
    if (value) {
      setJsonValue(JSON.parse(value));
    }
  }, [value]);

  const updateValue: Dispatch<SetStateAction<JsonType>> = useCallback(
    v => {
      const valueToSet = v instanceof Function ? v(jsonValue!) : v;
      setValue(JSON.stringify(valueToSet));
    },
    [jsonValue, setValue],
  );

  return [jsonValue, updateValue];
};
