import {
  createBrowserRouter,
  RouterProvider as RootRouterProvider,
} from 'react-router-dom';
import MainPage from '../pages/Main';
import NotFoundPage from '../pages/NotFound';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: routes.main.index,
    element: <MainPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function RouterProvider() {
  return <RootRouterProvider router={router} />;
}
