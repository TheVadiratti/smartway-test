import {
  createBrowserRouter,
  Outlet,
  RouterProvider as RootRouterProvider,
} from 'react-router-dom';
import Layout from '../pages/Layout';
import MainPage from '../pages/Main';
import NotFoundPage from '../pages/NotFound';
import RepositoryPage from '../pages/Repository';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: routes.main.index,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ':id',
        element: <RepositoryPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RootRouterProvider router={router} />;
}
