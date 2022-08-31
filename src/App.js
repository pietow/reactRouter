import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react"

import Cat from './Cat';
import Dog from "./Dog"
import Home from './Home';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
     <h1>My React App</h1>
         <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dog" element={<Dog />} />
                <Route path="/cat" element={<Cat />} />
         </Routes>

    </div>
</BrowserRouter>
  );
}

export default App;
