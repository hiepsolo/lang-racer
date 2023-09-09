import './App.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
]);

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
