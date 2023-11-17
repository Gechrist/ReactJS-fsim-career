import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StateContextProvider } from './context/context';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthenticationGuard from './components/AuthenticationGuard';
import ErrorPage from './components/Error/ErrorPage';
import Dashboard from './components/Dashboard/Dashboard';
import CareerPage from './components/CareerPage/CareerPage';
import Settings from './components/Settings/Settings';
import Faq from './components/FAQ/Faq';
import CareerMenu from './components/CareerMenu/CareerMenu';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <AuthenticationGuard component={Dashboard} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },

      {
        path: 'new',
        element: <CareerPage />,
      },
      {
        path: 'pilot',
        element: <CareerMenu />,
      },
    ],
  },
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/dashboard`,
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <StateContextProvider>
            <RouterProvider router={router} />
          </StateContextProvider>
        </QueryClientProvider>
      </Auth0Provider>
    </HelmetProvider>
  </React.StrictMode>
);
