import { HomeIcon, ArrowRightLeft } from "lucide-react"
import { useLocation } from "react-router"
import { Link } from "react-router"
import image from "../assets/image.png"
import React from "react"

export default function Sidebar() {
    const features = [
        { name: 'dashboard', link: '/dashboard', icon: <HomeIcon className="stroke-black  w-4 h-4 group-hover:stroke-white" /> },
        { name: 'transaction', link: '/transaction', icon: <ArrowRightLeft className="stroke-black group-hover:stroke-white w-4 h-4" /> },
        // { name: 'dashboard', link: '/dashboard', icon: <HomeIcon className="stroke-black hover:stroke-white w-4 h-4" /> }
    ]
    const location = useLocation()
    const currentLocation = location.pathname

    return (
        <div className="w-10 h-full shrink-0 relative flex-col gap-y-2 flex justify-center items-center">
            <ul className="flex flex-col gap-y-4 ">
                {features.map((feature, index) => {
                    const isActive = currentLocation === feature.link
                    return (
                        <li key={index} className="flex">
                            <Link
                                to={feature.link}
                                className={`group hover:bg-black   w-8 h-8 rounded-full flex duration-200 text-center transition-colors justify-center items-center ${isActive
                                        ? 'bg-black stroke-white'
                                        : 'bg-white hover:bg-black'}`}>
                                {React.cloneElement(feature.icon, {
                                    className: `w-4 h-4 transition-colors ${isActive
                                            ? 'stroke-white'
                                            : 'stroke-black group-hover:stroke-white'
                                        }`
                                })}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="absolute bottom-10 ">
                <div className=" flex flex-col gap-y-2">
                    <div className="rounded-full w-8 h-8 bg-white"></div>
                    <Link to='/profile'> <img src={image} alt="image" className="rounded-full w-8 h-8 bg-cover" /> </Link>
                </div>
            </div>
        </div>
    )
}
