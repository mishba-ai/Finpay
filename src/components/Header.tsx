import finpaylogo from "../../public/finpaylogo.png"

export default function Header() {
    return (
        <div className="w-full h-12  shrink-0 flex items-center bg-">
            <img src={finpaylogo} alt="logo" className="w-20" />
        </div>
    )
}
