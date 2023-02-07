import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import uuid from 'react-uuid';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./components/Home";
import Handheld from "./components/Handheld";
import PhysicsTestP5 from "./components/PhysicsTestP5";
import PhysicsTestMatter from "./components/PhysicsTestMatter";

import {handheldPath, matterTestPath, p5TestPath} from "./constants";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let id = (process.env.REACT_APP_DEBUG) ? "test123" : uuid();

if (process.env.REACT_APP_DEBUG) {
    console.log("Client ID: " + id)
}

// Source: https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home id={id}/>,
    },
    {
        path: handheldPath,
        element: <Handheld/>,
    },
    {
        path: p5TestPath,
        element: <PhysicsTestP5/>,
    },
    {
        path: matterTestPath,
        element: <PhysicsTestMatter/>,
    },
    {
        path: "*",
        element: <Home id={id}/>,
    }
]);


// Commented Strict Mode out bc it causes component to render twice
// Source: https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
root.render(
//   <React.StrictMode>
    <RouterProvider router={router}/>
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
