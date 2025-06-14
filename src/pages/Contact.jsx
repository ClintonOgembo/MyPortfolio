import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg text-gray-700">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="flex justify-between items-center w-1/2 max-w-sm max-auto mb-8">
          <a href="mailto:clintonogembo70@gmail.com" className="text-3xl text-indigo-600 hover:text-indigo-800 transition">
            <FaEnvelope color="#EA4335"/>
          </a>
          <a href="tel:+254111805894" className="text-3xl text-indigo-600 hover:text-indigo-800 transition">
            <FaPhone color="#34A853"/>
          </a>
          <a href="https://www.linkedin.com/in/clinton-ogembo-4a353b307/" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-600 hover:text-indigo-800 transition">
            <FaLinkedin color="#0077B5"/>
          </a>
          <a href="https://github.com/ClintonOgembo" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-600 hover:text-indigo-800 transition">
            <FaGithub color="#181717"/>
          </a>
          <a href="https://www.instagram.com/clinton_og8?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-600 hover:text-indigo-800 transition">
            <FaInstagram color="#E4405F"/>
          </a>
        </div>
        <form className="bg-white rounded-lg shadow-md p-10 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-1/2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-1/2"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-1/2"
            required
          />
          <button
            type="submit"
            className="items-center bg-indigo-600 text-white rounded-full py-3 font-semibold hover:bg-indigo-700 transition w-1/5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;