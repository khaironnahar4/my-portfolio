import heroImage from '../../../assets/hero-image.png' 

function Hero() {
  return (
    <section id="home" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between justify-center items-center">
        <img
          src={heroImage}
          className="md:max-w-sm w-full bg-transparent rounded-lg"
        />

        {/* <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Khairun Nahar</h1>
          <p className="py-6">Frontend Developer | React Enthusiast</p>
          <button className="btn primaryBtn">Get Started</button>
        </div>
      </div> */}
        <div className='text-center lg:text-start'>
          <h1 className="md:text-6xl text-4xl font-bold">Khairun Nahar</h1>
          <p className="md:py-6 py-3">Frontend Developer | React Enthusiast</p>
          <button className="btn primaryBtn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
