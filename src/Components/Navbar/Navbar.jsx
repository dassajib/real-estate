import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="relative">
      <div
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${sticky ? "bg-[#3D62F8] shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center py-4 px-8">
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

          <div className="block md:hidden">
            <button onClick={() => setOpenMenu(!openMenu)} className="text-white cursor-pointer text-2xl">☰</button>
          </div>
        </div>
      </div>

      {openMenu && (<div>
        <div className="bg-white px-14 py-10 text-black font-bold rounded-lg flex flex-col gap-8 md:hidden absolute top-16 right-8 z-10">
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
    </nav>

  )
}

export default Navbar