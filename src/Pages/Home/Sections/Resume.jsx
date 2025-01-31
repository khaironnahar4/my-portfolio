function Resume() {
  return (
    <section id="resume" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Resume</h2>
        <div className="text-center">
          <p className="mb-6">
            Download my resume to learn more about my experience.
          </p>
          <a href="/resume.pdf" download className="btn primaryBtn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
