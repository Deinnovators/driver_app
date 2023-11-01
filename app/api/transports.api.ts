import { AxiosInstance } from 'axios';
import { HTTPService, socket } from '@app/services';
import { Endpoints } from '@app/constants/endpoints';

export class TransportsApi extends HTTPService {
  private readonly endpoints: Endpoints;

  constructor(readonly instance: AxiosInstance, readonly ep: Endpoints) {
    super(instance);
    this.endpoints = ep;
  }

  async getNextSchedules(): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.nextSchedules,
    });
    return res.data;
  }

  async getAllSchedules(): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.schedules,
    });
    return res.data;
  }

  async createTrip(data: any): Promise<any[]> {
    const res = await this.post({
      endpoint: this.endpoints.transports.trips,
      data,
    });
    socket.startTrip(res.data);
    return res.data;
  }
  async updateTrip(id: number, data: any): Promise<any[]> {
    const res = await this.patch({
      endpoint: this.endpoints.transports.trips + '/' + id,
      data,
    });
    socket.updateTrip(res.data);
    return res.data;
  }

  async finishTrip(id: number, trip: any): Promise<void> {
    await this.delete({
      endpoint: this.endpoints.transports.trips + '/' + id,
    });
    socket.finishTrip(trip);
  }
}
