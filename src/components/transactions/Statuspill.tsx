import { STATUS_STYLES } from "../../utils/helpers"

interface status {
    status: "Successfull" | "Cancelled" | "Pending"
}
export default function Statuspill({ status }: status) {
    const st = STATUS_STYLES[status] || STATUS_STYLES.Pending
    return (
        <div className={`inline-block text-${st.color} bg-${st.bg} whitespace-nowrap`}>{status}</div>
    )
}
