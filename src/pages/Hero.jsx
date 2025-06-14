import myPhoto from '../assets/me.jpg';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center animated-gradient text-white px-6"
    >
      <div className="text-center  max-w-2xl">
        <img
          src={myPhoto}
          alt="Clinton Ogembo"
          className="mx-auto mb-6 object-cover rounded-full border-4 border-white shadow-lg w-1/2"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-yellow-300">Clinton Ogembo</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I am a Full Stack Developer with a strong focus on building complete web solutions. My core areas of expertise include frontend development for responsive user interfaces, backend development for robust server-side logic, and database design and integration to manage and store data efficiently.
        </p>
        <div className="flex flex-row justify-center space-x-12 mt-8">
          <a
            href="#projects"
            className="bg-red-600 text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-100 hover:scale-105 transition transform duration-200 border-2 border-white mr-12"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-green-600 border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 hover:scale-105 transition transform duration-200 text-white mr-12"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
