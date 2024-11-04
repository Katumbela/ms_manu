
import AxiosHttpClient from '@/api/axiosHttpClient';
import type { CreditRequest } from '@/infra/interfacess';

export class CreditRequestService {
  private httpClient: AxiosHttpClient;
  private readonly creditRequestsUrl = '/credit-requests';

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  // Função para criar uma requisição de crédito
  async createCreditRequest(accountNumber: string, amount: number, description: string, term: any, creditor_code_entity: number, creditor: string): Promise<CreditRequest> {

    console.log(term)
    try {
      const response = await this.httpClient.post<CreditRequest>(this.creditRequestsUrl, {
        accountNumber,
        amount,
        description,
        term,
        creditor,
        creditor_code_entity
      });
      return response;
    } catch (error) {
      console.error('Error creating credit request', error);
      throw error;
    }
  }

  // Função para aprovar uma requisição de crédito
  async approveCreditRequest(requestId: string): Promise<void> {
    try {
      await this.httpClient.put(`${this.creditRequestsUrl}/${requestId}/approve`);
    } catch (error) {
      console.error(`Error approving credit request with id ${requestId}`, error);
      throw error;
    }
  }

  // Função para negar uma requisição de crédito
  async denyCreditRequest(requestId: string): Promise<void> {
    try {
      await this.httpClient.put(`${this.creditRequestsUrl}/${requestId}/deny`);
    } catch (error) {
      console.error(`Error denying credit request with id ${requestId}`, error);
      throw error;
    }
  }

  // Função para obter o histórico de requisições de crédito por número de conta
  async getCreditRequestHistory(accountNumber: string): Promise<CreditRequest[]> {
    try {
      const response = await this.httpClient.get<CreditRequest[]>(`${this.creditRequestsUrl}/history/${accountNumber}`);
      return response;
    } catch (error) {
      console.error(`Error fetching credit request history for account ${accountNumber}`, error);
      throw error;
    }
  }
}
