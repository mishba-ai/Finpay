export interface Transaction {
  id:       string;
  date:     string;   
  desc:     string;
  icon:     string;   
  method:   string;  
  category: string;
  type:     TransactionType;
  amount:   number;
  status:   TransactionStatus;
}

export type TransactionType   = "income" | "expense";
export type TransactionStatus = "Successful" | "Cancelled" | "Pending";

export type NewTransaction = Omit<Transaction, "id">;

export interface SortConfig {
  key: keyof Transaction;   
  dir: "asc" | "desc";
}

export interface Filters {
  type:     TransactionType | "All";
  category: string;         
  method:   string;         
  status:   TransactionStatus | "All";
}

export interface UseTransactionsReturn {
  role:             Role;
  setRole:          (role: Role) => void;
  txns:             Transaction[];
  search:           string;
  setSearch:        (s: string) => void;
  filters:          Filters;
  setFilter:        (key: keyof Filters, value: string) => void;
  sort:             SortConfig;
  handleSort:       (key: keyof Transaction) => void;
  drawerOpen:       boolean;
  setDrawerOpen:    (open: boolean) => void;
  modal:            ModalState;
  setModal:         (state: ModalState) => void;
  rows:             Transaction[];
  activeFilterCount: number;
  isLoading:        boolean;
  error:            string | null;
  handleSave:       (txn: Transaction | NewTransaction) => Promise<void>;
  handleDelete:     (id: string) => Promise<void>;
}

export type Role = "admin" | "viewer";

export type ModalState = null | "add" | Transaction;

export interface Sortableheader {
  label: string
  colkey: keyof Transaction
  sort: { key: string; dir: string }
  onSort: (key:keyof Transaction)=>void
  align?: string
}