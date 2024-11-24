/* eslint-disable @typescript-eslint/no-unused-vars */

import AxiosHttpClient from '@/api/axiosHttpClient';
import type { School } from '@/infra/interfacess';

export class SchoolService {
  private httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  async getSchools(): Promise<School[]> {
    //const route = `/api/schools?schoolType=${schoolType}`;
    const route = `/schools`;
    const response = await this.httpClient.get<School[]>(route);
    return response;
  }
  async getSchoolsByType(type: string): Promise<any[]> {
    //const route = `/api/schools?schoolType=${schoolType}`;
    // const route = `/schools/type/${type}`;
    const route = `/schools`;
    const response: any = await this.httpClient.get(route);
    return response.data;
  }
  async getSchoolsById(id: string): Promise<any> {
    //const route = `/api/schools?schoolType=${schoolType}`;
    const route = `/schools/${id}`;
    const response: any = await this.httpClient.get(route);
    return response.data;
  }
}
