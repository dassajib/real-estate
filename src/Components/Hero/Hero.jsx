import { HiLocationMarker } from "react-icons/hi"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import heroImage from "../../assets/hero-img.jpg"

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 pt-24 pb-6">
        <div className="flex flex-col gap-12 px-4 md:px-0">
          <div className="relative z-[1]">
            <div className="absolute w-16 h-16 right-[100px] -top-4 rounded-full bg-orange-400 z-[-1]" />
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-4xl md:text-5xl lg:text-6xl/[65px] font-semibold">Discover <br /> Most Suitable <br /> Property</motion.h1>
          </div>

          <div className="flex flex-col justify-center items-start">
            <span className="text-gray-400">Find a variety of properties that suit you very easilty</span>
            <span className="text-gray-400">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="bg-white rounded-md border-[3px] border-[rgba(120,120,120,0.3)] flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center py-2 px-4">
            <div className="flex items-center gap-2 w-full">
              <HiLocationMarker color="#3D62F8" size={25} />
              <input
                className="border-none outline-none w-full"
                type="text"
                placeholder="Enter location"
              />
            </div>
            <button className="bg-[#3D62F8] text-white px-6 py-2 rounded-md text-[14px] transition duration-300 ease-in hover:scale-110 w-full sm:w-auto">
              Search
            </button>
          </div>

          <div className="flex justify-start items-center gap-4 text-white">
            <div className="flex flex-col justify-center items-start md:items-center">
              <span className="text-2xl md:text-4xl">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-[15px] font-medium">Premium Product</span>
            </div>

            <div className="flex flex-col justify-center items-start md:items-center">
              <span className="text-2xl md:text-4xl">
                <CountUp start={1950} end={2000} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-[15px] font-medium">Happy Customer</span>
            </div>

            <div className="flex flex-col justify-center items-start md:items-center">
              <span className="text-2xl md:text-4xl">
                <CountUp end={28} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="text-gray-400 text-[15px] font-medium">Awards Winning</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-96 w-60 md:h-[450px] md:w-[280px] lg:h-[550px] lg:w-[480px] overflow-hidden border-8 border-[#302E2D] rounded-t-[15rem]"
        >
          <img className="h-full w-full" src={heroImage} alt="Hero Image" />
        </motion.div>
      </div>
    </section>

  )
}

export default Hero