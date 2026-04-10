import { useState, useMemo, useEffect } from "react"
import type { Transaction, Filters, SortConfig, Role, ModalState } from "../types/index"
// import { UseTransactionsReturn } from "../types/index"
import {
  fetchTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../api"

export default function useTransactions() {

  const [role, setRole] = useState<Role>("admin")

  const [txns, setTxns]           = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError]         = useState<string | null>(null)
  const [search, setSearch]       = useState<string>("")
  const [filters, setFiltersState] = useState<Filters>({
    type:     "All",
    category: "All",
    method:   "All",
    status:   "All",
  })
  const [sort, setSort] = useState<SortConfig>({ key: "date", dir: "desc" })
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [modal, setModal] = useState<ModalState>(null)


  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchTransactions()
        const cleaned = data.map(t => ({
          ...t,
          amount: Math.floor(Math.abs(t.amount) % 2000) + 10,
        }))
        setTxns(cleaned)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load transactions")
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])


  const setFilter = (key: keyof Filters, value: string) =>
    setFiltersState(prev => ({ ...prev, [key]: value }))

  const handleSort = (key: keyof Transaction) =>
    setSort(prev => ({
      key,
      dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc",
    }))

  const rows = useMemo(() => {
    const filtered = txns.filter(t => {
      const q = search.toLowerCase()
      if (q && ![t.desc, t.category, t.method].some(f => f.toLowerCase().includes(q))) return false
      if (filters.type     !== "All" && t.type     !== filters.type)     return false
      if (filters.category !== "All" && t.category !== filters.category) return false
      if (filters.method   !== "All" && t.method   !== filters.method)   return false
      if (filters.status   !== "All" && t.status   !== filters.status)   return false
      return true
    })

    return [...filtered].sort((a, b) => {
      let va: string | number | Date = a[sort.key] as string | number
      let vb: string | number | Date = b[sort.key] as string | number
      if (sort.key === "date") { va = new Date(va as string); vb = new Date(vb as string) }
      if (va < vb) return sort.dir === "asc" ? -1 : 1
      if (va > vb) return sort.dir === "asc" ?  1 : -1
      return 0
    })
  }, [txns, search, filters, sort])


  const handleSave = async (txn: Transaction | Omit<Transaction, "id">) => {
    try {
      if ("id" in txn) {
        const updated = await updateTransaction(txn)
        setTxns(prev => prev.map(t => t.id === updated.id ? updated : t))
      } else {
        const created = await createTransaction(txn)
        setTxns(prev => [created, ...prev])
      }
      setModal(null)
    } catch (err) {
        console.error(err);
      alert("Failed to save. Please try again.")
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this transaction?")) return
    try {
      await deleteTransaction(id)
      setTxns(prev => prev.filter(t => t.id !== id))
    } catch (err) {
        console.error(err);
      alert("Failed to delete. Please try again.")
    }
  }

  const activeFilterCount = Object.values(filters).filter(v => v !== "All").length

  return {
    role, setRole,
    txns,
    search, setSearch,
    filters, setFilter,
    sort, handleSort,
    drawerOpen, setDrawerOpen,
    modal, setModal,
    rows,
    activeFilterCount,
    isLoading,
    error,
    handleSave,
    handleDelete,
  }
}