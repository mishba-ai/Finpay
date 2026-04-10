const summary = [
  {text : 'Total Balance' , amount : '' },
  {text : 'Total Income' , amount : '' },
  {text : 'Total Expense' , amount : '' }

]
export default function SummaryCards() {
  return (
    <div className="flex  justify-around  gap-y-2 items-center ">
      {summary.map((s , index) => (
        <div key={index}  className="p-4 w-78 h-54 transition-transform scale-110   rounded-3xl border-2 border-white/30 bg-whit backdrop-blur-sm shadow-xl hover:scale-[1.02] hover:shadow-2xl">
             <p className="text-2xl ">{s.text}</p>
             <div className="mt-6">
                <p className="text-4xl">${s.amount}</p>
                <p className="text-sm mt-2 text-neutral-400">In the last 12 months</p>
             </div>
        </div>
      ))}
        
    </div>
  )
}
