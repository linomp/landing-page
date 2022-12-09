import './App.css';

import PropTypes from 'prop-types'

import { HashRouter, Routes, Route } from "react-router-dom";

import Handheld from './Handheld';
import Home from './Home';
import NoPage from './NoPage';

function App(props) {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home id={props.id} />} />
          <Route path="/handheld" element={<Handheld />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

App.propTypes = {
  id: PropTypes.string.isRequired
}


export default App;
