import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact.jsx'
import Layout  from "./core/Layout.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);

createRoot(document.getElementById('root')).render(

        <RouterProvider router={router} />

);