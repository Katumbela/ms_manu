import AxiosHttpClient from '@/api/axiosHttpClient'; 

export class BankAccountService {

  private httpClient: AxiosHttpClient;
  private readonly bankAccountUrl = "/account"


  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  async transferFunds(fromAccount: string, toAccount: string, amount: number): Promise<any> {
 
    try {
      const response = await this.httpClient.post(this.bankAccountUrl, {
        fromAccountNumber: fromAccount,
        toAccountNumber: toAccount,
        amount: amount
      }
      );
      return response;
    } catch (error) {
      console.error('Error transfering your funds', error);
      throw error;
    }
  }
 
}
