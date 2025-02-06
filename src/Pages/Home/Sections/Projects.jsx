import { Link } from "react-router-dom";
import projects from "../../../JSON/Project.json";
import { FaLocationArrow } from "react-icons/fa";
import SectionHeader from "../../../Components/SectionHeader";

function Projects() {
  // console.log(project);

  return (
    <section id="projects" className="lg:py-20 md:py-14 py-12">
       <SectionHeader
        heading="My Projects"
        subHeading="See All Of My Recent Work"
        text="Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development."
      ></SectionHeader>
      <div className="container mx-auto px-4 mt-12 md:mt-14 lg:mt-16">
        {/* <h2 className="text-4xl font-bold text-center mb-10">Projects</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            // <div key={idx} className="card bg-base-200 shadow-xl">
            //   <div className="card-body">
            //     <h3 className="card-title">{project.projectName}</h3>
            //     <p>{project.description}.</p>
            //     <div className="card-actions justify-end">
            //       <Link to={project.link} target="_blank"
            //       className="btn primaryBtn">View Details</Link>
            //     </div>
            //   </div>
            // </div>

            <div key={idx} className="card w-full shadow-xl">
              <figure>
                <img
                  src={project.image}
                  alt={`${project.projectName} image`}
                />
              </figure>
              <div className="card-body flex-row justify-between items-start">
                <div>
                <h2 className="card-title">{project.projectName}</h2>
                <p>{project.category}</p>
                </div>
                <div className="card-actions justify-start">
                  <Link to={project.link} target="_blank" 
                  className="p-3 border hover:border-white rounded-full hover:bg-[#6FB72F] bg-white
                   hover:text-white text-[#6FB72F] border-gray-400 text-xl "><FaLocationArrow /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
