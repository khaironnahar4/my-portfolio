import AboutMe from "./AboutMe";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
// import Resume from "./Sections/Resume";
import Skills from "./Sections/Skills";

function Home() {
  return (
    <div className="px-4 sm:px-0">
      {/* hero section */}
      <Hero />

      {/* about me section */}
      <AboutMe />

      {/* lg:py-20 md:py-14 py-12 */}

         {/* Skills Section */}
         <Skills />

      {/* Projects Section */}
      <Projects />

       {/* Resume Section */}
       {/* <Resume /> */}

        {/* Contact Section */}
        <Contact />
      
    </div>
  );
}

export default Home;
