export interface User {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  profile?: string;
  role?: string;
  mobile?: number;
  image?: string;
  wallet?: number;
  status?: boolean;
  courses?: string[];
  walletHistory?: WalletHistory[];
}

export interface WalletHistory {
  date: Date;
  amount: number;
  description: string;
}
