import { Client } from "app/modules/clients/models";

export type ClientCard = Client & {
    phone: number;
    transactions: Transaction[]
};

export type Transaction = {
  paymentDate: number;
  сounterparty: string;
  amount: number;
  paymentType: PaymentType;
};

export type PaymentType = 'in' | 'out';
