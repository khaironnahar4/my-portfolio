

function SectionHeader({heading, subHeading, text}) {
  return (
    <>
        <h4 className="text-center mb-2 text-lg ovo">{subHeading}</h4>
        <h2 className="text-center mb-4 text-5xl ovo font-bold">{heading}</h2>
        <p className="text-center ovo text-[16px] w-full sm:w-2/3 md:w-1/2 mx-auto">{text}</p>
    </>
  )
}

export default SectionHeader