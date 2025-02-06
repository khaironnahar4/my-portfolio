import { FaCode, FaGraduationCap, FaSuitcase } from "react-icons/fa";
import SectionHeader from "../../Components/SectionHeader";

function AboutMe() {
  return (
    <div id="about" className="lg:py-20 md:py-14 py-12">
      <SectionHeader
        heading="About Me"
        subHeading="Introduction"
        text=""
      ></SectionHeader>
      <div className="">
        <p className="md:w-2/3 w-full sm:px-6 mx-auto mt-12 md:mt-14 lg:mt-16">
          I am a front-end web developer skilled in React.js, Tailwind CSS, and
          JavaScript, with experience in building responsive, user-centric
          interfaces and integrating backend services. Passionate about creating
          seamless web experiences and eager to gain real-world experience by
          contributing to impactful projects in a collaborative team environment
        </p>

        <div className="md:w-4/5 w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center mt-10 mx-2">
            <div className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <div className="card-body">
                <div className="text-2xl">
                  <FaCode />
                </div>
                <h2 className="card-title">Languages</h2>
                <p>HTML, CSS, JavaScript, React.js</p>
              </div>
            </div>

            <div className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <div className="card-body">
                <div className="text-2xl">
                  <FaGraduationCap />
                </div>

                <h2 className="card-title">Education</h2>
                <p>B.Sc in CSE</p>
              </div>
            </div>

            <div className="card w-[280px] shadow-xl border-2 bg-white border-gray-200 hover:shadow-xl hover:bg-[#e4ffce]">
              <div className="card-body">
                <div className="text-2xl">
                  <FaSuitcase />
                </div>
                <h2 className="card-title">Projects</h2>
                <p>Build more than 5 projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
