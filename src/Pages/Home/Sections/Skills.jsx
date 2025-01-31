

function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git"].map(
              (skill) => (
                <div key={skill} className="badge primaryBtn badge-lg">
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>
  )
}

export default Skills