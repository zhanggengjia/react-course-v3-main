import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ✅ 建立一次 QueryClient 實例
const queryClient = new QueryClient();

// ✅ 只呼叫一次 createRoot()
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>

);