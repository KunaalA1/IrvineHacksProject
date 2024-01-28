import React from "react";
import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    return (
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/page2" element={<Page2/>} />
        </Routes>
      </Router>
      
  );
  
}


export default App;
