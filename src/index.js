import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'react-uuid';

const root = ReactDOM.createRoot(document.getElementById('root'));

let id = (process.env.REACT_APP_DEBUG) ? "test123" : uuid();

if (process.env.REACT_APP_DEBUG) {
  console.log("Client ID: " + id)
}

// Commented Strict Mode out bc it causes component to render twice
// Source: https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
root.render(
  //   <React.StrictMode>
  <App id={id} />
  //   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
