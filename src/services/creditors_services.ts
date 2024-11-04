
import AxiosHttpClient from '@/api/axiosHttpClient';
import   { CreditRequest } from '@/infra/interfacess';
import { Creditor } from '@/infra/interfacess/creditor';

export class CreditorsService {
  private httpClient: AxiosHttpClient;
  private readonly creditRequestsUrl = '/creditors';

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }
  async createCreditor(accountNumber: string, amount: number, description?: string): Promise<CreditRequest> {
    try {
      const response = await this.httpClient.post<CreditRequest>(this.creditRequestsUrl, {
        accountNumber,
        amount,
        description,
      });
      return response;
    } catch (error) {
      console.error('Error creating creditor request', error);
      throw error;
    }
  }

  async getCreditors(): Promise<Creditor[] | any> {

    try {

      const response = await this.httpClient.get(this.creditRequestsUrl) as Creditor
      return response

    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the creditors ");

    }
  }

  async getCreditorById(id: string): Promise<Creditor | any> {
    try {
      const response = await this.httpClient.get(this.creditRequestsUrl + "/" + id) as Creditor
      return response

    } catch (error: any) {
      console.log(error.message)
      throw new Error("An error ocurred while getting the creditors ");

    }
  }
}