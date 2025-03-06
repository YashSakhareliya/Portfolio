import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <BrowserRouter>
      <div className="relative w-full overflow-hidden">

        {/* Preaload coming soon */}

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
            </main>
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
