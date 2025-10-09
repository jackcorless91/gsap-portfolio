import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.jsx";
import NavBar from "@/components/NavBar.jsx";
import React from "react";
import Projects from "@/pages/Projects.jsx";
import Contact from "@/pages/Contact.jsx";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route element={<Projects />}/>
        <Route element={<Contact />}/>
        {/*<Route path="*" index element={ <NotFound /> } />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
