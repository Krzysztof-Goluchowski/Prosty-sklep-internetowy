import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Cart from "./pages/Cart"
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Trainers from "./pages/Trainers";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "Cart",
        element: <Cart/>,
    },
    {
        path: "Contact",
        element: <Contact/>,
    },
    {
        path: "FAQ",
        element: <FAQ/>,
    },
    {
        path: "Shop",
        element: <Shop/>,
    },
    {
        path: "Trainers",
        element: <Trainers/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
reportWebVitals();
