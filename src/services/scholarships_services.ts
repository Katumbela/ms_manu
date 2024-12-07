import AxiosHttpClient from '@/api/axiosHttpClient'; 
import { IScholarship } from '@/infra/interfacess/scholarship';

export class ScholarShipsService {
  private httpClient: AxiosHttpClient;
  private readonly scholarshipRequestsUrl = '/scholarships';

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }
  async createScholarship(scholarshipDto: IScholarship): Promise<IScholarship> {
    try {
      const response = await this.httpClient.post<IScholarship>(this.scholarshipRequestsUrl, {
        scholarshipDto
      });
      return response;
    } catch (error) {
      console.error('Error creating scholarship request', error);
      throw error;
    }
  }

  async getScholarships(): Promise<IScholarship[] | any> {
    try {
      const response = await this.httpClient.get(this.scholarshipRequestsUrl) as IScholarship
      return response
    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the scholarships ");
    }
  }

  async getScholarshipById(id: string): Promise<IScholarship | any> {
    try {
      const response = await this.httpClient.get(this.scholarshipRequestsUrl + "/" + id) as IScholarship
      return response
    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the scholarship ");
    }
  }
}