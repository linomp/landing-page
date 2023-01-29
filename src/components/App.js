import './App.css';

import PropTypes from 'prop-types'

import { HashRouter, Routes, Route } from "react-router-dom";

import Handheld from './Handheld';
import Home from './Home';
import React from "react";
import PhysicsTest from "./PhysicsTest";
import BlackHole from "./BlackHole";

function App(props) {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home id={props.id} />} />
          <Route path="/handheld" element={<Handheld />} />
          <Route exact path ="/physics-test" element={<PhysicsTest />} />
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
