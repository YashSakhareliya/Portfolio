import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./components";

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
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
