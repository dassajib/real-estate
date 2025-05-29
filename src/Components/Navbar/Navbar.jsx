import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"

// navigation links
const navLinks = [
  { name: "Residencies", href: "#residencies" },
  { name: "Our Value", href: "#value" },
  { name: "Contact Us", href: "#contact" },
  { name: "Get Started", href: "#hero" },
]

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

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
          {/* Logo */}
          <div>
            <img className="w-full h-10" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-white font-medium cursor-pointer md:flex justify-between items-center gap-6">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setOpenMenu(false)}>
                {link.name}
              </a>
            ))}
            <a href="#">
              <button className="bg-[#3D62F8] text-white font-bold px-6 py-2 rounded-md text-[14px] transition duration-300 ease-in hover:scale-110">
                Contact
              </button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="block md:hidden">
            <button onClick={() => setOpenMenu(!openMenu)} className="text-white cursor-pointer text-2xl">☰</button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {openMenu && (
        <div className="md:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="bg-white px-16 py-10 text-black font-bold rounded-lg flex flex-col gap-8 fixed top-20 right-8 z-50 shadow-lg">
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute top-2 right-2 text-3xl text-black hover:text-red-500"
            >
              &times;
            </button>

            {navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setOpenMenu(false)}>
                {link.name}
              </a>
            ))}
            <a href="#">
              <button className="bg-[#3D62F8] text-white px-6 py-2 rounded-md text-[14px] transition duration-300 ease-in hover:scale-110">
                Contact
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
