export interface NfcPayment {
  _id: number;
  paymentAmount: number;
  paymentDate: Date;
  nfcTransactionId: string;
}
