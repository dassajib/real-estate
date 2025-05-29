// import Navbar from "./Components/Navbar/Navbar"
// import Hero from "./Components/Hero/Hero"
// import Companies from "./Components/Companies/Companies"
// import Residencies from "./Components/Residencies/Residencies"
// import Value from "./Components/Value/Value"
// import Contact from "./Components/Contact/Contact"
// import Footer from "./Components/Footer/Footer"

// function App() {
//   return (
//     <>
//       <div className="bg-[#131110] relative">
//         <div className="absolute bg-gray-500 h-60 w-60 md:h-96 md:w-96 rounded-full blur-[100px]" />
//         <Navbar />
//         <Hero />
//       </div>
//       <Companies />
//       <Residencies />
//       <Value />
//       <Contact />
//       <Footer />
//     </>
//   )
// }

// export default App



import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Companies from "./Components/Companies/Companies"
import Residencies from "./Components/Residencies/Residencies"
import Value from "./Components/Value/Value"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <div className="bg-[#131110] relative">
        <div className="absolute bg-gray-500 h-60 w-60 md:h-96 md:w-96 rounded-full blur-[100px]" />
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
      </div>

      <section id="companies">
        <Companies />
      </section>
      <section id="residencies">
        <Residencies />
      </section>
      <section id="value">
        <Value />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
