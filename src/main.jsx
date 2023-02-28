import React from 'react';
import ReactDOM from 'react-dom/client';
import uuid from 'react-uuid';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./components/Home";
import Handheld from "./components/Handheld";
import PhysicsTestP5 from "./components/PhysicsTestP5";
import PhysicsTestMatter from "./components/PhysicsTestMatter";

import {handheldPath, matterTestPath, p5TestPath} from "./constants";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let id = (import.meta.env.VITE_DEBUG) ? "test123" : uuid();

if (import.meta.env.VITE_DEBUG) {
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


root.render(
    <RouterProvider router={router}/>
);
