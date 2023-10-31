export interface NativeConfig {
  [name: string]: string;
}

export interface ConfigObject extends NativeConfig {
  BASE_URL: string;
  SOCKET_URL: string;
}
