import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="relative w-full overflow-hidden">

        {/* Preaload coming soon */}

        {/* main content */}
        <div className="transition-colors">

        </div>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
