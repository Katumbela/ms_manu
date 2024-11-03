
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
  async getSchoolsByType(type: string): Promise<School[]> {
    //const route = `/api/schools?schoolType=${schoolType}`;
    const route = `/schools/type/${type}`;
    const response = await this.httpClient.get<School[]>(route);
    return response;
  }
  async getSchoolsById(id: string): Promise<School> {
    //const route = `/api/schools?schoolType=${schoolType}`;
    const route = `/schools/${id}`;
    const response = await this.httpClient.get<School>(route);
    return response;
  }
}
