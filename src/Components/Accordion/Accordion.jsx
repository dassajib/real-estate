import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import data from "../../utils/accordion";

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-xl mx-auto space-y-4">
            {data?.map((item, idx) => (
                <AccordionItem
                    key={idx}
                    index={idx}
                    isOpen={openIndex === idx}
                    title={item?.heading}
                    icon={item?.icon}
                    content={item?.detail}
                    onToggle={() => toggleAccordion(idx)}
                />
            ))}
        </div>
    );
};

const AccordionItem = ({ title, content, icon, isOpen, onToggle }) => {
    return (
        <div className={`bg-white border rounded overflow-hidden pb-2 ${isOpen ? "shadow-xl" : "shadow-sm"}`}>
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center gap-2 py-3 px-4 font-medium hover:bg-gray-100 transition"
            >
                {icon}
                <span className="text-[#1F3E72] text-sm md:text-lg font-bold flex-1">{title}</span>
                <TiArrowSortedDown
                    className={`text-[#4066FF] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                />
            </button>

            {isOpen && (
                <div className="px-4 py-2 text-gray-500">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
