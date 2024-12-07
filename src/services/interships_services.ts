
import AxiosHttpClient from '@/api/axiosHttpClient'; 
import { IInternship } from '@/infra/interfacess/internship';

export class InternShipsService {
  private httpClient: AxiosHttpClient;
  private readonly internshipRequestsUrl = '/internships';

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }
  async createInternShip(internshipDto: IInternship): Promise<IInternship> {
    try {
      const response = await this.httpClient.post<IInternship>(this.internshipRequestsUrl, {
        internshipDto
      });
      return response;
    } catch (error) {
      console.error('Error creating internship request', error);
      throw error;
    }
  }

  async getInternships(): Promise<IInternship[] | any> {

    try {

      const response = await this.httpClient.get(this.internshipRequestsUrl) as IInternship
      return response

    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the internships ");

    }
  }

  async getInternshipById(id: string): Promise<IInternship | any> {
    try {
      const response = await this.httpClient.get(this.internshipRequestsUrl + "/" + id) as IInternship
      return response

    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the internship ");

    }
  }
}