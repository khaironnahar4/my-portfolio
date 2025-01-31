import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Skills from "./Sections/Skills";

function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

       {/* Resume Section */}
       <Resume />

        {/* Contact Section */}
        <Contact />
      
    </div>
  );
}

export default Home;
