import type { Transaction } from "./types"

export  const request = async <T>(path:string,options?:RequestInit):Promise<T> => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASErequest}${path}`,{
            headers:{"Content-Type":"application/json"},
            ...options,
        })
        if(!res.ok) throw new Error(`Api ${res.status}:${res.statusText}`);
        return res.json() as Promise<T>;
    } catch (error) {
        console.error('error: ', error)
        throw error;
    }
}

// GET ALL 
export const fetchTransactions = () => request<Transaction[]>("/transactions")

export const createTransaction = (data:Omit<Transaction,"id">) => request<Transaction>("/transactions",{
    method:"POST",
    body:JSON.stringify(data)
}) 

export const updateTransaction = (txn:Transaction) => request<Transaction>(`/transactions/${txn.id}`,{
    method:"PUT",
    body:JSON.stringify(txn),
}) 

export const deleteTransaction = (id:string) => request<Transaction>(`/transactions/${id}`,{method:"DELETE"})