import type { Account } from "./account";

export interface CreditRequest {
  id: string;
  amount: number;
  status: 'pending' | 'approved' | 'denied';
  creditor?: string
  createdAt: Date;
  account: Account;
  description?: string;
  term?: string
  creditor_entity_code?: string
}
