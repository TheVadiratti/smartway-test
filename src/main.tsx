import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './components/highOrder/ErrorBoundary';
import './index.css';
import RouterProvider from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider />
    </ErrorBoundary>
  </StrictMode>
);
