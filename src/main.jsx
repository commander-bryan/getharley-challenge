import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { OrderProvider } from './providers/OrderProvider';
import { NotFound } from './components/NotFound';
import { Navbar } from './components/Navbar';

import './index.css'

import { ProductsRoute } from './pages/Products';
import { OrderRoute } from './pages/Order';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        errorElement: <Navbar />,
        children : [
            {
                path: "/",
                element: <App />,
            },
            ProductsRoute,
            OrderRoute,
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <OrderProvider>
        <RouterProvider router={router} />
    </OrderProvider>,
)
