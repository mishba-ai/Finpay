interface header {
  label: string
  colkey: string
  sort: { key: string; dir: string }
  onSort: (colkey: string) => void
  align?: string
}
export default function Theader({ label, colkey, sort, onSort, align = 'left' }: header) {
  const isActive = sort.key === colkey; // currently active sort column ?
  return (
    <th className={`uppercase cursor-pointer select-none whitespace-nowrap ${isActive ? "#111827" : "#9ca3af"} `} onClick={() => onSort(colkey)}>
      {label}
      {/* sort indicator */}
      <span className={`opacity-${isActive ? 1 : 0.3}`}>
        {isActive ? (sort.dir === 'asc' ? "▲" : "▼") : '⇅'}
      </span>
    </th>

  )
}
