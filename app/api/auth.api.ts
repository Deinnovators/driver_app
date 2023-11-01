import { Endpoints } from '@app/constants/endpoints';
import { HTTPService } from '@app/services';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class AuthApi extends HTTPService {
  private readonly endpoints: Endpoints;

  constructor(readonly instance: AxiosInstance, readonly ep: Endpoints) {
    super(instance);
    this.endpoints = ep;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ jwt: string; user: any }> {
    const res = await this.post({
      endpoint: this.endpoints.auth.login,
      data: { email, password },
    });
    return res.data;
  }
  async getProfile(config?: AxiosRequestConfig): Promise<any> {
    const res = await this.get({
      endpoint: this.endpoints.auth.profile,
      config,
    });
    return res.data;
  }
}
