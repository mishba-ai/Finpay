import { useState, useMemo, useEffect } from "react";
import { fetchTransactions, createTransaction, updateTransaction, deleteTransaction } from '../api'
import type { Transaction } from "../types";


export default function useTransactons() {

    const [role, setRole] = useState("admin")
    const [txns, setTxns] = useState<Transaction[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    const [filters, setFiltersState] = useState({
        type: "All",
        category: "All",
        method: "All",
        status: "All",
    });

    const [sort, setSort] = useState({ key: "date", dir: "desc" })
    const [drawerOpen, setDrawerOpen] = useState(false)
    //   add/edit modal
    const [modal, setModal] = useState(null)

    const setFilter = (key: string, value: string) => {
        setFiltersState(prev => ({ ...prev, [key]: value }))
    }

    // toggle sort direction
    const handleSort = (key: string) => setSort(prev => ({ key, dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc" }))

    // tsnx -> filter -> sort-> rows(final displaydata)

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const data = await fetchTransactions()
                setTxns(data)
            } catch (error) {
                setError(error instanceof Error ? error.message : String(error))
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    // filter and sort 
    const rows = useMemo(() => {
        const filtered = txns.filter(t => {
            const q = search.toLowerCase()
            if (q && ![t.desc, t.category, t.method].some(f => f.toLowerCase().includes(q)))
                return false
            if (filters.type !== "All" && t.type !== filters.type) return false
            if (filters.category !== "All" && t.category !== filters.category) return false
            if (filters.method !== "All" && t.method !== filters.method) return false
            if (filters.status !== "All" && t.status !== filters.status) return false
        })
        return [...filtered].sort((a, b) => {
            let va:Transaction[keyof Transaction] = (a)[sort.key]
            let vb:Transaction[keyof Transaction] = (b)[sort.key]
            if (sort.key === 'date')
                 { va = new Date(va  ); vb = new Date(vb) }
            if (va < vb) return sort.dir === "asc" ? -1 : 1
            if (va > vb) return sort.dir === "asc" ? 1 : -1
            return 0
        })
    }, [txns, search, filters, sort])

    // 
    const handleSave = async (txn: Transaction) => {
        try {
            if (txn.id && txns.find(t => t.id === txn.id)) {
                const updated = await updateTransaction(txn)
                setTxns(prev => prev.map(t => t.id === updated.id ? updated : t))
            }
            else {
                const created = await createTransaction(txn)
                setTxns(prev => [created, ...prev])
            }
            setModal(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err))
        }
    }

    const handleDelete = async (id:string) => {
        if (!window.confirm("delete this transaction?")) return
        try {
            await deleteTransaction(id)
            setTxns(prev => prev.filter(t => t.id !== id))
        } catch (error) {
            console.error(error);
        }
    }
    return {
        role,
        setRole,
        txns,
        setTxns,
        error,
        setError,
        setLoading,
        search,
        setSearch,
        filters,
        setFilter,
        sort,
        handleSort,
        drawerOpen,
        setDrawerOpen,
        modal,
        setModal,
        rows,
        handleSave,
        handleDelete,
        isLoading:loading,
        activeFilterCount:Object.values(filters).filter(v=>v!=="All").length
    }
}
