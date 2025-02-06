import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from '../../../assets/hero-image.png' 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="home" className="hero min-h-screen mt-10">
      <div className="hero-content flex-col justify-center items-center">
        <img
          src={heroImage}
          className="md:max-w-xs bg-transparent rounded-lg"
        />

        {/* <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Khairun Nahar</h1>
          <p className="py-6">Frontend Developer | React Enthusiast</p>
          <button className="btn primaryBtn">Get Started</button>
        </div>
      </div> */}
        <div className='text-center ovo'>
          <h1 className="md:text-2xl text-xl">Hi, I am Khairun Nahar</h1>
          <p className="md:py-6 py-3 text-3xl sm:text-6xl lg:text-[66px]">Front-end Web Developer</p>
          {/* social media links */}
          <div className='flex justify-center gap-6 sm:text-3xl text-2xl'>
            {/* facebook */}
            <Link to={'https://www.facebook.com/khaironnahar4/'} 
            className='hover:text-[#6FB72F] cursor-pointer'>
              <FaFacebook />
            </Link>

            {/* github */}
            <Link to={'https://github.com/khaironnahar4'}
            className='hover:text-[#6FB72F] cursor-pointer'>
              <FaGithub />
            </Link>

            {/* linkedin */}
            <Link to={'https://www.linkedin.com/in/khairunnahar247/'}
            className='hover:text-[#6FB72F] cursor-pointer'>
              <FaLinkedin />
            </Link>

            {/* whatsapp */}
            {/* <Link to={'https://wa.me/+8801956301999'}
            className='hover:text-[#6FB72F] cursor-pointer'>
              <FaWhatsapp />
            </Link> */}
          </div>
          <div className='flex sm:flex-row flex-col items-center gap-4 mt-4 justify-center'>
            <a href="#"
            className='px-10 py-3 border border-white rounded-full bg-[#6FB72F] text-white'
            >Contact Me</a>
            <a href="#"
            className='px-10 py-3 border border-gray-500 rounded-full'
            >My Resume</a>
          </div>
          {/* <button className="btn primaryBtn">Get Started</button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
