import './App.css';

import PropTypes from 'prop-types'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Handheld from './Handheld';
import Home from './Home';
import NoPage from './NoPage';

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home id={props.id} />} />
          <Route path="/handheld" element={<Handheld />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  id: PropTypes.string.isRequired
}


export default App;
