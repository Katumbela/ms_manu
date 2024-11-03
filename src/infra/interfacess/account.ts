import type { CreditRequest } from "./credit_request";
import type { Student } from "./student";
import type { Transaction } from "./transaction";

export interface Account {
  _id: number;
  ownerId: number;
  student: Student;
  balance: number;
  account_number: string;
  card_number: string;
  transactions: Transaction[];
  creditRequests: CreditRequest[];
}
