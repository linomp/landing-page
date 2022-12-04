import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'react-uuid';

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: toggle fixed or random id depending on env variable
let id = "test123";//uuid();

// Commented this out bc it causes component to render twice....
// Source: https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
// root.render(
//   <React.StrictMode>
//     <App id={id} />
//   </React.StrictMode>
// );

root.render(
  <App id={id} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
