import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Menu from "@/components/Menu.jsx";
import React from "react";
import Projects from "@/pages/Projects.jsx";
import Contact from "@/pages/Contact.jsx";

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        {/*<Route path="*" index element={ <NotFound /> } />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
