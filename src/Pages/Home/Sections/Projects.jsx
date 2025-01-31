import projects from '../../../JSON/Project.json'

function Projects() {
    // console.log(project);
    
  return (
    <section id="projects" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">{project.projectName}</h3>
                  <p>{project.description}.</p>
                  <div className="card-actions justify-end">
                    <button className="btn primaryBtn">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects