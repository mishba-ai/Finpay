import { STATUS_STYLES } from "../../utils/helpers"
import type { TransactionStatus } from "../../types"

type StatuspillProps = {
    status: TransactionStatus
}

export default function Statuspill({ status }: StatuspillProps) {
    const st = STATUS_STYLES[status] || STATUS_STYLES.Pending
    return (
        <div className={`inline-block text-${st.color} bg-${st.bg} whitespace-nowrap`}>{status}</div>
    )
}
