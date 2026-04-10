import { Tally1Icon, SearchIcon, SlidersHorizontalIcon, FileUpIcon, PlusIcon } from "lucide-react"
import TransactionTable from "../components/transactions/TransactionTable"

export default function Transaction() {
  return (
    <div className="">
      <header className="flex gap-x-12 w-full">
        <div>
          <div className="text-3xl font-medium font-serif">Transaction</div>
          <p className="text-sm text-neutral-400 font-extralight italic">Overview of your activities</p>
        </div>
        <div className="w-250 bg-neutral-100 h-12  rounded-2xl opacity-65 flex gap-x-4 items-cente">
          <input type="text" className="w-220  border-none outline-none text-serif  rounded-2xl p-2 placeholder:text-[#19560c]" placeholder="Search " />
          <div className="flex items-center "> <Tally1Icon size={32} className="stroke-[#2a671c]" /> </div>
          <div className="flex items-center"><SearchIcon className="stroke-[#2a671c]" /></div>
        </div>
      </header>
 
      {/* features  */}
      <div className="flex justify-between items-center w-full mt-2">
        <div className="flex gap-x-5">
          <input type="date" className="bg-red- rounded-2xl border border-neutral-400 p-2 " />
          <div className="rounded-full border-neutral-400 border p-2"><SlidersHorizontalIcon size={20} />
          </div>
        </div>
        <div className="flex gap-x-4">
          <button className="flex rounded-3xl text-sm justify-center items-center gap-x-2  border font-medium border-neutral-400  px-2 py-3">
            <FileUpIcon size={19} /> <p>Export CSV</p>
          </button>
          <button className="flex rounded-3xl bg-black text-white text-xs justify-center items-center gap-x-  border font-medium border-neutral-400  px-2 py-3">
            <PlusIcon size={19} className="stroke-white" /> <p>Add new</p>
          </button>
        </div>
      </div>

      {/* table */}
      <TransactionTable/>

    </div>
  )
}
