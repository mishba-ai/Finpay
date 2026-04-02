import { Outlet,useLocation } from "react-router"

export default function Layout() {
    const location = useLocation()
  return (
    <div className="bg-[#F7F7F5] w-full ">
        <div><Outlet/></div>
    </div>
  )
}
