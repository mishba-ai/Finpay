import { XIcon } from "lucide-react";
import type { Filters } from "../../types";


export default function FilterDrawer({ open, filters, setFilter, onClose }) {

  // const sections = [
  //   { label: "Type",     key: "type",     options: TYPES },
  //   { label: "Status",   key: "status",   options: STATUSES },
  //   { label: "Category", key: "category", options: CATEGORIES },
  //   { label: "Method",   key: "method",   options: METHODS },
  // ];

  const clearAll = () => {
    sections.forEach(s => setFilter(s.key, "All"));
    onClose();
  };

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position:        "fixed",
            inset:           0,
            zIndex:          40,
            backgroundColor: "rgba(0,0,0,0.18)",
          }}
        />
      )}
      <div>

        {/* Header */}
        <div >
          <span className="">Filters</span>
          <button
            onClick={onClose}
          className=" "
          >
            <XIcon/>
          </button>
        </div>

        {sections.map(({ label, key, options }) => (
          <div key={key}>
            {/* Section label */}
            <div className="">
              {label}
            </div>

            <div className="flex flex-wrap gap-x-6">
              {options.map(opt => {
                const isActive = filters[key] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setFilter(key, opt)}
                   className=""
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <button
          onClick={clearAll}
         className=""
        >
          Clear all filters
        </button>
      </div>
    </>
  );
}