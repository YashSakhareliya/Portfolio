import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Blog, Contact, Experience, Footer, Navbar, Preloader } from "./components";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const darkMode = useSelector((state) => state.theme.darkMode)

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="relative w-full overflow-hidden">

        {/* Preaload coming soon */}
        <Preloader  onComplete={handlePreloaderComplete}/>

        {/* main content */}
        <div className="transition-colors duration-300">
          <div className={`${darkMode ? 'dark' : ''} bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50`}>
            <Navbar />

            <main className="w-full">
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects" className="w-full">
                <Projects />
              </section>

              <section id="experience" className="w-full">
                <Experience />
              </section>

              <section className="w-full" id="blog">
                <Blog />
              </section>

              <section className="w-full" id="contact">
                <Contact />
              </section>
            </main>
            <Footer />
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
