import { Swiper, SwiperSlide } from "swiper/react"
import data from "../../utils/sliderData.json"
import "swiper/css"

const Residencies = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col">
        <div>
          <h3 className="text-orange-500 text-2xl font-semibold">Best Choices</h3>
          <h1 className="text-[#1f3e72] text-3xl font-extrabold">Popular Residencies</h1>
        </div>

        <Swiper>
          {
            data?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col">
                  <img className="w-full max-w-60" src={item.image} alt={item.name} />

                  <span>
                    <span className="text-orange-500 text-xl font-bold">$</span>
                    <span className="text-gray-500 text-xl font-bold">{item.price}</span>
                  </span>

                  <span className="text-[#1F3E72] text-2xl font-semibold">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies