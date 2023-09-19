import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/toaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
]);

function App() {
  return (
    <Layout>
      <Toaster />
      <Outlet />
    </Layout>
  );
}

export default App;
