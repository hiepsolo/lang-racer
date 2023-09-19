import './index.css';
import '@/lib/i18n';
import '@/lib/firebase';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/about';
import App from './App.js';
import ErrorPage from './error-page';
import Home from './pages/home';
import { Layout } from './components/layout/Layout';
import React from 'react';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
