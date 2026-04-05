import { useState, useEffect, useRef } from "react"
import { EyeIcon, EditIcon, EllipsisIcon, Trash2Icon } from "lucide-react";

type Transaction = {
    type: string;
    icon: string;
    desc: string;
    amount: string;
    method: string;
    category: string;
    id: string;
};

interface ActionMenuProps {
    txn: Transaction;
    role: "admin" | "viewer";
    onEdit: (txn: Transaction) => void;
    onDelete: (id: string) => void;
}

export default function Actionmenu({ txn, role, onEdit, onDelete }: ActionMenuProps) {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    const menuType = [
        {
            label: 'view details',
            icon: <EyeIcon />,
            onclick: () => {
            }
        },
        ...(role === "admin" ? [
            {
                label: "Edit",
                icon: <EditIcon />,
                onclick: () => { onEdit(txn); setOpen(false) }
            },
            {
                label: 'Delete',
                icon: <Trash2Icon />,
                danger: true,
                onclick: () => { onDelete(txn.id); setOpen(false) }
            }
        ] : [])
    ];

    return (
        <div ref={wrapperRef} className="relative inline-block">
            <button onClick={() => setOpen(prev => !prev)}
                className="hover:bg-[#f3f4f6] cursor-pointer ">
                <EllipsisIcon />
            </button>
            {/* dropdown  */}
            {open && (
                <div className="absolute z-50 overflow-hidden">
                    {menuType.map((menu, index) => (
                        <button
                            key={index}
                            onClick={menu.onclick}
                            onMouseEnter={e => e.currentTarget.style.background = menu.danger ? "#fef2f2" : "#f9fafb"}
                            onMouseLeave={e => e.currentTarget.style.background = "none"}
                            className={`flex items-center gap-9 w-full cursor-pointer text-${menu.danger ? "#dc2626" : "#374151"}`}>
                            <span>
                                {menu.icon}
                            </span>
                            {menu.label}
                        </button>
                    ))

                    }
                </div>
            )
            }

        </div>
    )
}
