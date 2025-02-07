import SectionHeader from "../../../Components/SectionHeader"
import { motion } from "motion/react"

function Skills() {
  return (
    <motion.section 
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:0.3}}
    id="skills" className="lg:py-20 md:py-14 py-12 px-4">
          <SectionHeader
        heading="Skills"
        subHeading="All tools I use"
        text=""
      ></SectionHeader>
          <motion.div 
          initial = {{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.9, delay:0.9}}
          className="flex flex-wrap justify-center gap-4 mt-12 md:mt-14 lg:mt-16">
            {/* {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git"].map(
              (skill) => (
                <div key={skill} className="badge primaryBtn badge-lg">
                  {skill}
                </div>
              )
            )} */}
            <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,express,mongodb,mysql,firebase,cpp,figma,github,git,postman,vscode&perline=6" />
          </motion.div>
      </motion.section>
  )
}

export default Skills