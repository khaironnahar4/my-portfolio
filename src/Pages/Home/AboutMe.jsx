import { FaCode, FaGraduationCap, FaSuitcase } from "react-icons/fa";
import SectionHeader from "../../Components/SectionHeader";
import { motion } from "motion/react"

function AboutMe() {
  return (
    <motion.div 
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:0.3}}
    id="about" className="lg:py-20 md:py-14 py-12">

      <SectionHeader
        heading="About Me"
        subHeading="Introduction"
        text=""
      ></SectionHeader>

      <div className="">
        <motion.p
        initial = {{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.9}}  
        className="md:w-2/3 w-full sm:px-6 mx-auto mt-12 md:mt-14 lg:mt-16">
          I am a front-end web developer skilled in React.js, Tailwind CSS, and
          JavaScript, with experience in building responsive, user-centric
          interfaces and integrating backend services. Passionate about creating
          seamless web experiences and eager to gain real-world experience by
          contributing to impactful projects in a collaborative team environment
        </motion.p>

        <div className="md:w-4/5 w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center mt-10 mx-2">
            <motion.div
            initial = {{opacity:0, y:50, scale:0.7}}
            whileInView={{opacity:1, y:0, scale:1}}
            transition={{duration:0.5, delay:0.9}}  
           
            className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <motion.div
               whileHover={{scale: 1.05}}  
              className="card-body">
                <div className="text-2xl">
                  <FaCode />
                </div>
                <h2 className="card-title">Languages</h2>
                <p>HTML, CSS, JavaScript, React.js</p>
              </motion.div>
            </motion.div>

            <motion.div 
            initial = {{opacity:0, y:50,scale:0.7}}
            whileInView={{opacity:1, y:0, scale:1}}
            transition={{duration:0.5, delay:1.1}}  
            className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <motion.div
              whileHover={{scale: 1.05}}   
              className="card-body">
                <div className="text-2xl">
                  <FaGraduationCap />
                </div>

                <h2 className="card-title">Education</h2>
                <p>B.Sc in CSE</p>
              </motion.div>
            </motion.div>

            <motion.div
             initial = {{opacity:0, y:50, scale:0.7}}
             whileInView={{opacity:1, y:0, scale:1}}
             transition={{duration:0.5, delay:1.3}} 
            className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <motion.div 
               whileHover={{scale: 1.05}}  
              className="card-body">
                <div className="text-2xl">
                  <FaSuitcase />
                </div>
                <h2 className="card-title">Projects</h2>
                <p>Build more than 5 projects.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
