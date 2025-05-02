import valueImg from "../../assets/value.jpg"

const Value = () => {
    return (
        <section className="flex justify-center items-center gap-8 px-6">
            <div className="h-96 w-60 md:h-[550px] md:w-[430px] overflow-hidden border-8 border-[#EAEAEA] rounded-t-[15rem]">
                <img className="h-full w-full" src={valueImg} alt="Value image" />
            </div>
            <div>
                <h3 className="text-orange-500 text-lg md:text-2xl font-semibold">Our Value</h3>
                <h1 className="text-[#1f3e72] text-xl md:text-3xl font-extrabold">Value We Give to You</h1>
                <span className="text-gray-400">We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better</span>
            </div>
        </section>
    )
}

export default Value