import type { Account } from "./account";

export interface CreditRequest {
  _id: number;
  amount: number;
  status: 'pending' | 'approved' | 'denied';
  createdAt: Date;
  account: Account;
  description?: string;
}
