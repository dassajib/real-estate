import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Companies from "./Components/Companies/Companies"
import Residencies from "./Components/Residencies/Residencies"
import Value from "./Components/Value/Value"

function App() {
  return (
    <>
      <div className="bg-[#131110] relative">
        <div className="absolute bg-gray-500 h-96 w-96 rounded-full blur-[100px]" />
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </>
  )
}

export default App
