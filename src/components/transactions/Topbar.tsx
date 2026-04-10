import { exportCSV } from "../../utils/helpers";
import { Calendar , Settings , FileUpIcon } from "lucide-react";

interface TopBarProps {
    role: 
}


export default function TopBar({
  role,
  setRole,
  rows,
  activeFilterCount,
  onOpenDrawer,
  onOpenModal,  
}) {
  return (
    <div className="flex justify-between items-center mb-10 flex-wrap gap-10">

      <div className="flex items-center gap-10">

        <div className="">
          <span><Calendar/></span> 01 Jun - 01 Jul 2024
        </div>

        {/* Filters button with badge counter */}
        <button onClick={onOpenDrawer} className="relative">
          <span><Settings/></span> Filters
          {/* Only render the badge when at least one filter is active */}
          {activeFilterCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-10 h-10 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

        {/* <div  className="gap-6">
          <span style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Role
          </span>
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            style={{ border: "none", background: "none", fontSize: 13, fontWeight: 600, color: "#111827", cursor: "pointer", outline: "none" }}
          >
            <option value="viewer">👁 Viewer</option>
            <option value="admin">⚡ Admin</option>
          </select>
        </div> */}

        <button
          onClick={() => exportCSV(rows)}
          className=""
        >
          <span><FileUpIcon/></span> Export CSV
        </button>

    
        {role === "admin" && (
          <button
            onClick={() => onOpenModal("add")}
            className="flex items-center gap-7 p-4 cursor-pointer"
          >
            + Add new
          </button>
        )}
      </div>
    </div>
  );
}