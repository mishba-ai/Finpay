

interface cards{
    text:string 
    amount:number
}

export default function SummaryCards({text,amount}:cards) {
  return (
    <div>
        <div className="p-4 w-72 h-44 rounded-2xl border-4 border-[#ffffff] bg-neutral-100 opacity-20 shadow-2xl">
             <p className="">{text}</p>
             <div>
                <p>{amount}</p>
                <p className="text-sm">In the last 12 months</p>
             </div>
        </div>
    </div>
  )
}
