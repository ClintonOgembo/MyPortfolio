import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript, SiMysql, SiExpress, SiCplusplus, SiPython, SiPhp,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

function About() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-4 text-left">
          <div>
            <h4 className="text-xl font-semibold mb-2">Personal Story & Background</h4>
            <p className="text-lg leading-relaxed text-justify">
              I’m Clinton Ogembo, a passionate Full Stack Developer with a deep curiosity for how technology shapes our world. Growing up, I was always fascinated by computers and how software can solve real-life problems. This early interest led me on a journey to explore programming, where I discovered the joy of building digital experiences from scratch.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">My Journey into Coding</h4>
            <p className="text-lg leading-relaxed text-justify">
              My coding journey began in campus when I took my first programming class. I was instantly captivated by the logic and creativity involved in writing code. Over time, I expanded my skills through online courses, projects, and collaboration with other developers. Each step reinforced my love for problem-solving and continuous learning.
            </p>
          </div>
        </div>

        {/* Values Section: centered and same width as one column */}
        <div className="w-full md:w-1/2 mx-auto mb-12 text-left">
          <h4 className="text-xl font-semibold mb-2 text-center">Values & Philosophy</h4>
          <p className="text-lg leading-relaxed text-justify">
            I believe that technology should be accessible, efficient, and user-centered. I strive to write clean, maintainable code and embrace collaboration and open communication. Integrity, growth, and empathy guide how I approach both my work and interactions with others.
          </p>
        </div>

        {/* Skills Section */}
        <h4 className="text-2xl font-semibold mb-6">Skills & Tech Stack</h4>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center mb-12">
          {[
            { icon: <FaReact id="react" className="text-[100px]" color="#61DAFB" />, label: "React" },
            { icon: <SiJavascript id='js' className="text-[100px]" color="#F7DF1E" />, label: "JavaScript" },
            { icon: <FaHtml5 id='html' className="text-[100px]" color="#E34F26" />, label: "HTML5" },
            { icon: <FaCss3Alt id='css' className="text-[100px]" color="#1572B6" />, label: "CSS3" },
            { icon: <FaNodeJs id='node' className="text-[100px]" color="#339933" />, label: "Node.js" },
            { icon: <SiExpress id='exp' className="text-[100px]" color="#000000" />, label: "Express.js" },
            { icon: <SiMysql id='sql' className="text-[100px]" color="#4479A1" />, label: "MySQL" },
            { icon: <FaGitAlt id='git' className="text-[100px]" color="#F05032" />, label: "Git" },
            { icon: <DiJava id='java' className="text-[100px]" color="#007396" />, label: "Java" },
            { icon: <SiCplusplus id='c' className="text-[100px]" color="#00599C" />, label: "C++" },
            { icon: <SiPython id='py' className="text-[100px]" color="#3776AB" />, label: "Python" },
            { icon: <SiPhp id='php' className="text-[100px]" color="#777BB4" />, label: "PHP" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center w-24 transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
              id='label'
            >
              {icon}
              <span className="mt-2 text-base font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Experience and Education */}
        <h4 className="text-xl font-semibold mb-2">Experience & Education</h4>
        <p className="text-justify mb-6">
          I have worked on various personal and group projects that involve full stack development. I’m continuously expanding my portfolio and skill set through real-world challenges.
          <br />
          I am currently a student at Multimedia University of Kenya pursuing a Bachelor's Degree in Software Engineering.
        </p>

        {/* Interests */}
        <h4 className="text-xl font-semibold mb-2">Personal Interests</h4>
        <p className="text-justify">
          Outside of coding, I enjoy reading about emerging technologies, contributing to open source projects, and engaging with the developer community. I also love football and photography, activities that help me stay creative and balanced.
        </p>
      </div>
    </section>
  );
}

export default About;
