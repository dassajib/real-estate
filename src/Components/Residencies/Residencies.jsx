import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

import data from "../../utils/sliderData.json";
import "swiper/css";
import "swiper/css/navigation";

const Residencies = () => {
  return (
    <section className="py-20 px-6">
      <div className="flex flex-col">
        <div className="mb-12">
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
                <div className="flex flex-col gap-3">
                  <img className="w-full max-w-60 rounded-lg" src={item.image} alt={item.name} />
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
          <div className="absolute flex md:-top-16 md:right-24">
            <div className="swiper-button-prev cursor-pointer">
              <GrFormPrevious size={14} />
            </div>
            <div className="swiper-button-next cursor-pointer">
              <MdOutlineNavigateNext size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residencies;
