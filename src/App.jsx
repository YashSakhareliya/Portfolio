import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
