import heroImage from "../../assets/hero-img.jpg"

const Hero = () => {
  return (
    <section className="bg-[#131110]">
      <div className="flex justify-center items-center pt-8">
        <div className="">
          <h1 className="text-white text-6xl">Discover Most Suitable Property</h1>
          <p>Find a variety of properties that suit you very easilty
            Forget all difficulties in finding a residence for you</p>
          <input type="text" />

          <div className="flex justify-center items-center">
            <div>
              <h3>9,000 +</h3>
              <p>Premium Product</p>
            </div>
            <div>
              <h3>2,000 +</h3>
              <p>Happy Customer</p>
            </div>
            <div>
              <h3>28 +</h3>
              <p>Awards Winning</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[550px] w-[430px] overflow-hidden border-8 border-[#302E2D] rounded-t-[15rem]">
            <img className="h-full w-full" src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero