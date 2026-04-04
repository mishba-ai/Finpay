import { HomeIcon, ArrowRightLeft } from "lucide-react"
import { Link } from "react-router"
import image from "../assets/image.png"
export default function Sidebar() {
    const features = [
        { name: 'dashboard', link: '/dashboard', icon: <HomeIcon className="stroke-black hover:stroke-white w-4 h-4" /> },
        { name: 'transaction', link: '/transaction', icon: <ArrowRightLeft className="stroke-black hover:stroke-white w-4 h-4" /> },
        { name: 'dashboard', link: '/dashboard', icon: <HomeIcon className="stroke-black hover:stroke-white w-4 h-4" /> }
    ]
    return (
        <div className="w-10 h-full shrink-0 relative flex-col gap-y-2 flex justify-center items-center">
            {features.map((feature, index) => (
                <ul key={index} className="flex flex-col gap-y-4 ">
                    <li className="hover:bg-black bg-white w-8 h-8 rounded-full flex text-center justify-center items-center ">
                        <Link to={feature.link} > <div>{feature.icon}</div> </Link>
                    </li>
                </ul>
            ))}

            <div className="absolute bottom-10 ">
                <div className=" flex flex-col gap-y-2">
                    <div className="rounded-full w-8 h-8 bg-white"></div>
                    <Link to=''> <img src={image} alt="image" className="rounded-full w-8 h-8 bg-cover" /> </Link>

                </div>
            </div>

        </div>
    )
}
