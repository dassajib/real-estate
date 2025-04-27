import company1 from "../../assets/equinix.png"
import company2 from "../../assets/prologis.png"
import company3 from "../../assets/realty.png"
import company4 from "../../assets/tower.png"

const Companies = () => {
    return (
        <section className="py-8">
            <div className="flex justify-between items-center px-4">
                <img className="w-36" src={company2} alt="Company Two Image" />
                <img className="w-36" src={company1} alt="Company One Image" />
                <img className="w-36" src={company3} alt="Company Three Image" />
                <img className="w-36" src={company4} alt="Company Four Image" />
            </div>
        </section>
    )
}

export default Companies