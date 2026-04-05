// status color map

export const STATUS_STYLES = {
    Successfull: { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    Cancelled: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
    Pending: { color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
}

// formats a number as USD currency string
export const fmt = (n: number) => `$${n.toLocaleString("en-US")}`

// format an ISO datetime to readable format date+time
export const fmtDate = (iso: Date) => {
    const d = new Date(iso);
    const date = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
    const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", hour12: false })
    return `${date} ${time}`
}

