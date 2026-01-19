import './index.css';

import { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import AppProvider from './components/core/app-provider';
import { routeTree } from './routeTree.gen';

const APP_MODE = import.meta.env.VITE_APP_MODE;

// Tanstack Query
const queryClient = new QueryClient();

// Tanstack Router
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppProvider
        queryClient={queryClient}
        appMode={APP_MODE}
        router={router}
      />
    </StrictMode>
  );
}