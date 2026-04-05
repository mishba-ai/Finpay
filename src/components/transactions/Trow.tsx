import { fmt,fmtDate } from "../../utils/helpers"
import Statuspill from "./Statuspill"

interface row {
    txn: { type: string, icon?: string, desc: string,amount:string, method: string, category: string }
    role: string
    isLast: boolean
    onEdit: () => void
    onDelete: (id: string) => void
}
export default function Trow({ txn, role, isLast, onEdit, onDelete }: row) {
    return (
        <tr className='' onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            {/* date */}
            <td className=''>{ }</td>
            {/* amount */}
            <td className=''>
                <span>{txn.type === "income" ?
                    "+" : "-"}{fmt(txn.amount) }</span>
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
            <td></td>
            {/* action menu */}
            <td>

            </td>
        </tr>
    )
}
