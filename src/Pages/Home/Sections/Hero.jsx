import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../../../assets/hero-image.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
// import { spring } from "motion";

function Hero() {
  return (
    <section id="home" className="hero min-h-screen mt-10">
      <div className="hero-content flex-col justify-center items-center">
        <motion.div 
          initial={{scale:0}}
          whileInView={{scale: 1}}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <img
            src={heroImage}
            className="md:max-w-xs bg-transparent rounded-lg"
          />
        </motion.div>

        {/* <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Khairun Nahar</h1>
          <p className="py-6">Frontend Developer | React Enthusiast</p>
          <button className="btn primaryBtn">Get Started</button>
        </div>
      </div> */}
        <div className="text-center ovo">
          <motion.h1  
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 100}}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="md:text-2xl text-xl">Hi, I am Khairun Nahar</motion.h1>
          <motion.p 
          initial={{y: -30, opacity: 0}}
          whileInView={{y: 0, opacity: 100}}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="md:py-6 py-3 text-3xl sm:text-6xl lg:text-[66px]">
            Front-end Web Developer
          </motion.p>
          {/* social media links */}
          <div className="flex justify-center gap-6 sm:text-3xl text-2xl">
            {/* facebook */}
            <motion.div
            initial={{y:-20, scale: 0, opacity: 0}}
            whileInView={{y:0, scale: 1, opacity: 1}}
            transition={{
              duration: 0.5,
              delay: 0.7
            }}
            >
            <Link
              to={"https://www.facebook.com/khaironnahar4/"}
              className="hover:text-[#6FB72F] cursor-pointer"
            >
              <FaFacebook />
            </Link>
            </motion.div>

            {/* github */}
            <motion.div
            initial={{y:-20, scale: 0, opacity: 0}}
            whileInView={{y:0, scale: 1, opacity: 1}}
            transition={{
              duration: 0.5,
              delay: 0.9
            }}
            >
            <Link
              to={"https://github.com/khaironnahar4"}
              className="hover:text-[#6FB72F] cursor-pointer"
            >
              <FaGithub />
            </Link>
            </motion.div>

            {/* linkedin */}
            <motion.div
            initial={{y:-20, scale: 0, opacity: 0}}
            whileInView={{y:0, scale: 1, opacity: 1}}
            transition={{
              duration: 0.5,
              delay: 1.1
            }}
            >
            <Link
              to={"https://www.linkedin.com/in/khairunnahar247/"}
              className="hover:text-[#6FB72F] cursor-pointer"
            >
              <FaLinkedin />
            </Link>
            </motion.div>

            {/* whatsapp */}
            {/* <Link to={'https://wa.me/+8801956301999'}
            className='hover:text-[#6FB72F] cursor-pointer'>
              <FaWhatsapp />
            </Link> */}
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-4 mt-4 justify-center">
            <motion.a
              initial={{y: 30, opacity: 0, scale: 0}}
              whileInView={{y: 0, opacity: 100, scale: 1}}
              transition={{
                duration: 0.6,
                delay: 1.3
              }}

              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-[#6FB72F] text-white"
            >
              Contact Me
            </motion.a>
            <motion.a
            initial={{y: 30, opacity: 0, scale: 0}}
            whileInView={{y: 0, opacity: 100, scale: 1}}
            transition={{
              duration: 0.6,
              delay: 1.5
            }}
              href="#"
              className="px-10 py-3 border border-gray-500 rounded-full"
            >
              My Resume
            </motion.a>
          </div>
          {/* <button className="btn primaryBtn">Get Started</button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
