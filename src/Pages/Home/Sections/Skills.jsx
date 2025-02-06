import SectionHeader from "../../../Components/SectionHeader"


function Skills() {
  return (
    <section id="skills" className="lg:py-20 md:py-14 py-12 px-4">
          <SectionHeader
        heading="Skills"
        subHeading="All tools I use"
        text=""
      ></SectionHeader>
          <div className="flex flex-wrap justify-center gap-4 mt-12 md:mt-14 lg:mt-16">
            {/* {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git"].map(
              (skill) => (
                <div key={skill} className="badge primaryBtn badge-lg">
                  {skill}
                </div>
              )
            )} */}
            <img src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,express,mongodb,mysql,firebase,cpp,figma,github,git,postman,vscode&perline=6" />
          </div>
      </section>
  )
}

export default Skills