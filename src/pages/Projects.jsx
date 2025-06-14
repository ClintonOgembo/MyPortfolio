function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my projects and skills, built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using the OpenWeatherMap API and React Hooks.",
      link: "#",
    },
    {
      title: "Telemedicine App",
      description: "Web application that links patients and doctors in different areas",
      link: "#",
    },
    {
      title: "MSFC Web APP ",
      description: "A simple frontend application to manage and inform MSFC team activities and progress.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
