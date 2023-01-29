import './App.css';

import React from "react";
import PropTypes from 'prop-types'

import { HashRouter, Routes, Route } from "react-router-dom";

import Handheld from './Handheld';
import Home from './Home';
import PhysicsTest from "./PhysicsTest";
import PhysicsTestP5 from "./PhysicsTestP5";
import BlackHole from "./BlackHole";

function App(props) {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home id={props.id} />} />
          <Route path="/handheld" element={<Handheld />} />
          <Route path ="/physics-test" element={<PhysicsTestP5 />} />
          <Route path ="/physics-test-old" element={<PhysicsTest />} />
          <Route path="/void" element={<BlackHole />} />
          <Route path="/*" element={<BlackHole />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

App.propTypes = {
  id: PropTypes.string.isRequired
}


export default App;
