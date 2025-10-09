import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.js";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        {/*<Route path="*" index element={ <NotFound /> } />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
