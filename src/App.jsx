import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

function App() {
  return (
    <>
      <div className="bg-[#131110] relative">
        <div className="absolute bg-gray-500 h-96 w-96 rounded-full blur-[100px]" />
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
