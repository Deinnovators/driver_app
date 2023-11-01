import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HTTPService } from '@app/services';
import { Endpoints } from '@app/constants/endpoints';

export class TransportsApi extends HTTPService {
  private readonly endpoints: Endpoints;

  constructor(readonly instance: AxiosInstance, readonly ep: Endpoints) {
    super(instance);
    this.endpoints = ep;
  }

  async getDrivers(config?: AxiosRequestConfig): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.drivers,
      config,
    });
    return res.data;
  }
  async getOngoingUpcoming(config?: AxiosRequestConfig): Promise<{
    ongoing: any[];
    upcoming: any[];
  }> {
    const res = await this.get({
      endpoint: this.endpoints.transports.ongoing,
      config,
    });
    return res.data;
  }

  async getOngoingTrips(config?: AxiosRequestConfig): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.trips,
      config,
    });
    return res.data;
  }

  async getAllSchedules(config?: AxiosRequestConfig): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.schedules,
      config,
    });
    return res.data;
  }
}
