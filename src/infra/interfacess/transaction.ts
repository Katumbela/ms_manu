export interface Transaction {
  _id: string; 
  amount: number;
  type: 'credit' | 'debit';
  status: 'approved' | 'pending' | 'success' | 'failed'; 
  createdAt: Date;
  account: string;  
  description?: string;
}
