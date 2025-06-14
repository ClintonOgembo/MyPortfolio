import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <main className='pt-16'>
        <section id = "hero">
          <Hero/>
        </section>
        <section id = "about">
          <About/>
        </section>
        <section id= "projects">
          <Projects/>
        </section>
        <section id='contacts'>
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
