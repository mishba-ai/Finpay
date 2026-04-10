import type { Transaction } from "../types";


// status color map
export const STATUS_STYLES = {
    Successful: { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    Cancelled: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
    Pending: { color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
}

// formats a number as USD currency string
export const fmt = (n: number) => `$${n.toLocaleString("en-US")}`


export const exportCSV = (rows:Transaction[]) => {
  const header = ["Date", "Description", "Method", "Category", "Type", "Amount", "Status"];
  const lines  = rows.map(r =>
    [fmtDate(r.date), `"${r.desc}"`, r.method, r.category, r.type, r.amount, r.status].join(",")
  );
  const csv  = [header.join(","), ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "transactions.csv";
  a.click();
  URL.revokeObjectURL(url); // clean up memory
};


// format an ISO datetime to readable format date+time
export const fmtDate = (iso: Date) => {
    const d = new Date(iso);
    const date = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
    const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", hour12: false })
    return `${date} ${time}`
}

