import { useState } from "react"
import logo from "../../assets/logo.png"

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <section>
      <div className="w-full flex flex-wrap justify-between items-center py-4 px-8">
        <div>
          <img className="w-full h-10" src={logo} alt="Logo" />
        </div>

        <div className="hidden text-white font-medium cursor-pointer md:flex justify-between items-center gap-6">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">
            <button className="bg-[#3D62F8] text-white font-bold px-6 py-2 rounded-md text-[14px] transition duration-300 ease-in hover:scale-110">
              Contact
            </button>
          </a>
        </div>

        {/* mobile hamburger */}
        <div className="block md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)} className="text-white cursor-pointer text-2xl">☰</button>
        </div>
      </div>

      {/* mobile menu */}
      {openMenu && (<div>
        <div className="bg-white text-black flex flex-col md:hidden">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <a href="">
            <button className="bg-[#3D62F8] text-white px-6 py-2 rounded-md text-[14px] transition duration-300 ease-in hover:scale-110">
              Contact
            </button>
          </a>
        </div>
      </div>)}

    </section>
  )
}

export default Navbar