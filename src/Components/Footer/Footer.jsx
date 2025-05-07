import logo2 from "../../assets/logo2.png"

const Footer = () => {
    return (
        <section className="py-10 mx-6">
            <div className="bg-[#4161DF] rounded-lg text-center border-8 border-[#5D77D6]">
                <h1 className="text-white text-3xl font-extrabold py-8">Get started with Homyz</h1>
                <p className="text-gray-300">Subscribe and find super attractive price quotes from us.</p>
                <p className="text-gray-300 mb-8">Find your residence soon</p>
                <button className="bg-[#5A73D7] mb-8 px-6 py-[10px] rounded-md text-white text-sm border-2 border-solid transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-110">Get Started</button>
            </div>

            <div className="flex justify-between mt-10">
                <div className="flex flex-col">
                    <img className="w-28 h-10" src={logo2} alt="Footer Logo" />
                    <span className="text-gray-400">Our vision is to make all people <br /> the best place to live for them.</span>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-[#1F3E72] text-4xl font-bold">Information</h1>
                        <span className="text-gray-400 text-sm">145 New York, FL 5467, USA</span>
                    </div>

                    <div className="text-[#00104A] font-semibold flex gap-6">
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