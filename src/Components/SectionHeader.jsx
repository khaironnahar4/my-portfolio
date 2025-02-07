import { motion } from "motion/react"

function SectionHeader({heading, subHeading, text}) {
  return (
    <>
        <motion.h4 
        initial = {{opacity:0, y:-30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.7}}
        className="text-center mb-2 text-lg ovo">{subHeading}
        </motion.h4>

        <motion.h2 
         initial = {{opacity:0, y:-30, scale:0}}
         whileInView={{opacity:1, y:0, scale:1}}
         transition={{duration:0.8, delay:0.5}}
        className="text-center mb-4 text-5xl ovo font-bold">{heading}</motion.h2>

        <motion.p
        initial = {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.9}} 
        className="text-center ovo text-[16px] w-full sm:w-2/3 md:w-1/2 mx-auto">{text}</motion.p>
    </>
  )
}

export default SectionHeader