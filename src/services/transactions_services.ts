import AxiosHttpClient from '@/api/axiosHttpClient';
import { Transaction } from '@/infra/interfacess';

export class TransactionService {

  private httpClient: AxiosHttpClient;
  private readonly transactionsUrl = "/transactions"


  constructor() {
    this.httpClient = new AxiosHttpClient();
  }
  // Função para criar uma transação
  async createTransaction(transaction: Transaction): Promise<Transaction> {

    try {
      const response = await this.httpClient.post<Transaction>(this.transactionsUrl, transaction);
      return response;
    } catch (error) {
      console.error('Error creating transaction', error);
      throw error;
    }
  }

  // Função para obter todas as transações
  async getAllTransactions(): Promise<Transaction[]> {
    try {
      const response = await this.httpClient.get<Transaction[]>(this.transactionsUrl);
      return response;
    } catch (error) {
      console.error('Error fetching transactions', error);
      throw error;
    }
  }

  // Função para obter transações por accountId
  async getTransactionsByAccount(accountId: string | any): Promise<Transaction[]> {
    try {
      const response = await this.httpClient.get<Transaction[]>(`${this.transactionsUrl}/${accountId}`);
      return response;
    } catch (error) {
      console.error(`Error fetching transactions for account ${accountId}`, error);
      throw error;
    }
  }

  // Função para deletar uma transação por id
  async deleteTransaction(transactionId: string): Promise<{ message: string }> {
    try {
      const response = await this.httpClient.delete<{ message: string }>(`${this.transactionsUrl}/${transactionId}`);
      return response;
    } catch (error) {
      console.error(`Error deleting transaction with id ${transactionId}`, error);
      throw error;
    }
  }
}
