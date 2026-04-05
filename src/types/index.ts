export interface Transaction {
  id:       string;
  date:     string;
  desc:     string;
  method:   string;
  category: string;
  type:     "income" | "expense";
  amount:   number;
  status:   "Successful" | "Cancelled" | "Pending";
}