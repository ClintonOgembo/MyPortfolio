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
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
              id='projo'
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
                id="viewproj"
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
