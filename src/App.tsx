import { useState } from "react"
import favicon from "../public/favicon.png"

function App() {
  const [showrole, setShowRole] = useState(false)

  const handleMouseEnter = () => {
    setShowRole(true)
  }
  const handleMouseLeave = () => {
    setShowRole(false)
  }
  return (
    <>
      {/* let the user select the role and on that basis change the UI */}
      <div className="bg-[#e1dbec bg-linear-to-tr font-serif from-[#edf3d0] via-[#ffffff] to-[#a8c7e3] flex w-full h-screen">

        <div className="w-[60%]   font-semibold text-lg ">
          <img src={favicon} alt="" className="w-72 " />
          <div className="flex justify-center items-center">
            <p className="text-neutral-500">Smart, secure, and seamless financial management at your fingertips</p>
          </div>
        </div>
        <div className="w-[40%]  flex justify-center items-center">
          <div className="w-96 h-112.5 rounded-2xl bg-[#cee98c] shadow-2xl flex justify-center items-center gap-x-2">
            <button className="text-[#353d09] text-2xl font-extralight  "> Select</button>
            <div className="flex flex-col place-items-baseline" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {!showrole && <div className={` text-2xl font-extralight text-[#353d09] px-4  rounded-xl w-24 border-2 border-[#353d09]  cursor-pointer `}
              >
                Roles
              </div>}
              {
                showrole && <div className="text-[#353d09] p-2 bg-[#edf3d0]  rounded-2xl text-2xl">
                  <div className="hover:bg-[#444343] hover:text-white p-1 px-2 cursor-pointer rounded-xl">Viewer</div>
                  <div className="hover:bg-[#444343] hover:text-white p-1 px-2 cursor-pointer rounded-2xl">Admin</div>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
