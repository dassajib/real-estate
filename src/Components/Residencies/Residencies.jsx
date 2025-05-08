import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";

import data from "../../utils/sliderData.json";

const Residencies = () => {
  return (
    <section className="py-20 px-6">
      <div className="flex flex-col">
        <div className="text-center md:text-left mb-6 md:mb-12">
          <h3 className="text-orange-500 text-lg md:text-2xl font-semibold">Best Choices</h3>
          <h1 className="text-[#1f3e72] text-xl md:text-3xl font-extrabold">Popular Residencies</h1>
        </div>

        <div className="relative px-4">
          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {data?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-xl hover:bg-orange-50">
                  <img className="w-full md:max-w-60 rounded-lg" src={item.image} alt={item.name} />
                  <span className="flex gap-1">
                    <span className="text-orange-500 text-xl font-bold">$</span>
                    <span className="text-gray-500 text-xl font-bold">{item.price}</span>
                  </span>
                  <span className="text-[#1F3E72] text-2xl font-extrabold">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute right-1/2 top-80 md:-top-16 md:right-24 flex items-center gap-2">
            <div className="swiper-button-prev cursor-pointer text-gray-600 hover:text-orange-500">
              <GrFormPrevious />
            </div>
            <div className="swiper-button-next cursor-pointer text-gray-600 hover:text-orange-500">
              <MdOutlineNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residencies;
