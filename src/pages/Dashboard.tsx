import SummaryCards from "../components/dashboard/SummaryCards";
import Balancetrend from "../components/dashboard/Balancetrend"
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-y-10 md:flex-col justify-between  w-full p-4 gap-6">
      {/* <div className="w-full md:w-2/3 flex items-stretch"><Balancetrend /> </div>
      <div className=" md:w-[40%] flex items-stretch  justify-center items- w-[40%]">
        <SummaryCards />
      </div> */}

<SummaryCards/>
<Balancetrend/>

    </div>
  )
}
