import React from 'react';
import './App.scss';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Upgrade from './components/Upgrade/Upgrade';
function App() {
  return (
          <div className="App">
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="Shop" exact element={<Shop/>}/>
              <Route path="Upgrade" exact element={<Upgrade/>}/>
            </Routes>
          </div>
  );
}
export default App;