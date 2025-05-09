import logo2 from "../../assets/logo2.png"

const Footer = () => {
    return (
        <section className="pb-10 mx-6">
            <div className="bg-[#4161DF] rounded-lg text-center border-8 border-[#5D77D6]">
                <h1 className="text-white text-xl md:text-3xl font-extrabold py-8">Get started with Homyz</h1>
                <p className="text-gray-300 text-xs md:text-sm px-6 md:px-0">Subscribe and find super attractive price quotes from us.</p>
                <p className="text-gray-300 text-xs md:text-sm mb-8">Find your residence soon</p>
                <button className="bg-[#5A73D7] mb-8 px-4 md:px-6 py-2 md:py-[10px] rounded-md text-white text-xs md:text-sm border-2 border-solid transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-110">Get Started</button>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 mt-10">
                <div className="flex flex-col justify-center items-center md:items-start gap-2">
                    <img className="w-28 h-10" src={logo2} alt="Footer Logo" />
                    <span className="text-gray-400 text-xs md:text-sm">Our vision is to make all people <br /> the best place to live for them.</span>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-[#1F3E72] text-xl md:text-4xl font-bold">Information</h1>
                        <span className="text-gray-400 text-xs md:text-sm">145 New York, FL 5467, USA</span>
                    </div>

                    <div className="text-[#00104A] font-medium md:font-semibold flex justify-center gap-3 md:gap-6">
                        <span>Property</span>
                        <span>Service</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer