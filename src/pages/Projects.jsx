import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal website to showcase my projects and skills, built with React and Tailwind CSS.",
      link: "https://github.com/ClintonOgembo/MyPortfolio",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app using the OpenWeatherMap API and React Hooks.",
      link: "https://github.com/ClintonOgembo/WeatherAPP",
    },
    {
      title: "Telemedicine App",
      description:
        "Web application that links patients and doctors in different areas, both frontend and backend.",
      link: "https://github.com/ClintonOgembo/TelemedicineApp",
    },
    {
      title: "MSFC Web APP",
      description:
        "A simple frontend application to manage and inform MSFC team activities and progress.",
      link: "https://github.com/ClintonOgembo/MSFC_Website",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6" id="projects">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Projects</h2>
        <div className="flex justify-between flex-wrap gap-x-12 gap-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white border-4 border-gray-400 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-6 w-1/4 min-w-[280px]"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
