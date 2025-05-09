import { motion } from "framer-motion";
import valueImg from "../../assets/value.jpg";
import Accordion from "../Accordion/Accordion";

const Value = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 80,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="h-96 w-60 md:h-[450px] md:w-[280px] lg:h-[550px] lg:w-[480px] overflow-hidden border-8 border-[#EAEAEA] rounded-t-[15rem]"
                    >
                        <img className="h-full w-full" src={valueImg} alt="Value image" />
                    </motion.div>
                </div>
                <div className="flex-1">
                    <div className="mb-10">
                        <h3 className="text-orange-500 text-lg md:text-2xl font-semibold mb-3">Our Value</h3>
                        <h1 className="text-[#1f3e72] text-xl md:text-3xl font-extrabold mb-3">Value We Give to You</h1>
                        <span className="text-gray-400">
                            We always ready to help by providijng the best services for you.
                            We beleive a good blace to live can make your life better
                        </span>
                    </div>

                    <Accordion />
                </div>
            </div>
        </section>
    );
};

export default Value;
