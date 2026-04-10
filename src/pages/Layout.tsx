import { Outlet,useLocation } from "react-router"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function Layout() {
  const location = useLocation()
  return (
    <div className="flex h-screen w-full bg-[#f0eef9] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
