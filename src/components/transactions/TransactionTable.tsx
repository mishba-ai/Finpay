import { fmt } from "../../utils/helpers"
import Theader from "./Theader"
import Trow from "./Trow"
import useTransactons from "../../hooks/useTransactons"

export default function TransactionTable() {

  const {
    role, setRole,
    txns,
    search, setSearch,
    filters, setFilter,
    sort, handleSort,
    drawerOpen, setDrawerOpen,
    modal, setModal,
    rows,
    activeFilterCount,
    handleSave,
    handleDelete,
  } = useTransactons()

  // summary calc
  const totalIncome = rows.filter(r => r.type === "income").reduce((s, r) => s + r.amount, 0)
  const totalExpense = rows.filter(r => r.type === "expense").reduce((s, r) => s + r.amount, 0)

  return (
    <div>
      <table className="w-full">
        <thead className="w-full">
          <tr className="flex justify-between bg-red-200 w-full">
            <Theader label="Date" colkey="date" sort={sort} onSort={handleSort} />
            <Theader label="Amount" colkey="amount" sort={sort} onSort={handleSort} />
            <th>Payment Name</th>
            <th>Method</th>
            <th>Category</th>
            <Theader label="Status" colkey="status" sort={sort} onSort={handleSort} />
          </tr>
        </thead>
        <tbody>
          { rows.length===0 ? (<tr>
            <td colSpan={7} className="p-56 text-center text-xl text-[#9ca3af]">
              No transactions match your filter
            </td>
          </tr>):(
            rows.map((txn,i)=>(
              <Trow 
              key={txn.id}
              txn={txn}
              role={role}
              isLast={i===rows.length-1}
              onEdit={() => setModal(txn)}
              onDelete={handleDelete}
               />
            ))
          )}
        </tbody>
      </table>
      {/* table footer */}
      {rows.length >0 &&(
        <div>
          <span>showing { rows.length} of {txns.length} transactions</span>
          <span>Income
            <strong>{fmt(totalIncome)}</strong>
            {" . "}
            Expenses{" "}
            <strong>{fmt(totalExpense)}</strong>
          </span>
        </div>
      )}
    </div>
    
  )
}