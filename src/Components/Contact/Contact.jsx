import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import contactImg from "../../assets/contactImg.avif"

const Contact = () => {
    return (
        <section className="py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6">
                <div className="flex-1">
                    <div>
                        <h3 className="text-orange-500 text-lg md:text-2xl font-semibold mb-3">Our Contact</h3>
                        <h1 className="text-[#1f3e72] text-xl md:text-3xl font-extrabold mb-3">Easy to contact us</h1>
                        <span className="text-gray-400">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="space-y-2 p-4 border rounded shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-md">
                            <div className="flex gap-8">
                                <div className="bg-gray-200 px-3 py-2 rounded-md flex justify-center items-center">
                                    <IoCall color="blue" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[#1F3E72] text-md md:text-lg font-semibold">Call</h3>
                                    <p className="text-gray-400 text-sm md:text-md">021 123 145 14</p>
                                </div>
                            </div>
                            <button className="text-[#3C61F4] text-sm md:text-md bg-gray-200 font-semibold hover:bg-[#3C61F4] hover:text-white w-full py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
                                Call Now
                            </button>
                        </div>

                        <div className="space-y-2 p-4 border rounded shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-md">
                            <div className="flex gap-8">
                                <div className="bg-gray-200 px-3 py-2 rounded-md flex justify-center items-center">
                                    <IoChatboxEllipsesOutline color="blue" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[#1F3E72] text-md md:text-lg font-semibold">Chat</h3>
                                    <p className="text-gray-400 text-sm md:text-md">021 123 145 14</p>
                                </div>
                            </div>
                            <button className="text-[#3C61F4] text-sm md:text-md bg-gray-200 font-semibold hover:bg-[#3C61F4] hover:text-white w-full py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
                                Chat Now
                            </button>
                        </div>

                        <div className="space-y-2 p-4 border rounded shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-md">
                            <div className="flex gap-8">
                                <div className="bg-gray-200 px-3 py-2 rounded-md flex justify-center items-center">
                                    <MdVideoCall color="blue" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[#1F3E72] text-md md:text-lg font-semibold">Video Call</h3>
                                    <p className="text-gray-400 text-sm md:text-md">021 123 145 14</p>
                                </div>
                            </div>
                            <button className="text-[#3C61F4] text-sm md:text-md bg-gray-200 font-semibold hover:bg-[#3C61F4] hover:text-white w-full py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
                                Video Call Now
                            </button>
                        </div>

                        <div className="space-y-2 p-4 border rounded shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-md">
                            <div className="flex gap-8">
                                <div className="bg-gray-200 px-3 py-2 rounded-md flex justify-center items-center">
                                    <FaRegMessage color="blue" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[#1F3E72] text-md md:text-lg font-semibold">Message</h3>
                                    <p className="text-gray-400 text-sm md:text-md">021 123 145 14</p>
                                </div>
                            </div>
                            <button className="text-[#3C61F4] text-sm md:text-md bg-gray-200 font-semibold hover:bg-[#3C61F4] hover:text-white w-full py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
                                Message Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 80,
                        }}
                        viewport={{ once: true, amount: 0.5 }} className="h-96 w-60 md:h-[450px] md:w-[280px] lg:h-[550px] lg:w-[480px] overflow-hidden border-8 border-[#EAEAEA] rounded-t-[15rem]">
                        <img className="h-full w-full" src={contactImg} alt="Value image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact