import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store.ts';

// // 08-fetch-data
// const queryClient = new QueryClient();
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );

// 09-rtk
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
