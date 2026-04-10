import { fmt, fmtDate } from "../../utils/helpers"
import Actionmenu from "./Actionmenu"
import Statuspill from "./Statuspill"
import type { Role, Transaction } from "../../types"


interface row {
    txn: Transaction
    role: Role
    isLast: boolean
    onEdit: (txn: Transaction) => void
    onDelete: (id: string) => void
}
export default function Trow({ txn, role, isLast, onEdit, onDelete }: row) {
    return (
        <tr className={`border-b-${isLast ? "none" : "border"}`} onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            {/* date */}
            <td className=''>{fmtDate(new Date(txn.date))}</td>
            {/* amount */}
            <td className=''>
                <span>{txn.type === "income" ?
                    "+" : "-"}{fmt(txn.amount)}</span>
            </td>
            {/* payment name */}
            <td className=''>
                <div className=''>
                    <span className='flex justify-center items-center font-lg shrink-0'>{txn.icon}</span>
                    <span className=''>{txn.desc}</span>
                </div>
            </td>
            {/* method */}
            <td>{txn.method}</td>
            {/* category */}
            <td>{txn.category}</td>

            {/* status */}
            <td>
                <Statuspill
                    status={txn.status} />
            </td>
            {/* action menu */}
            <td >
                <Actionmenu
                    txn={txn}
                    role={role}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </td>
        </tr>
    )
}
