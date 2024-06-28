import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <h1>Hone</h1>
    </>
    ),
  },
  {
    path: "/user/dashboard",
    element: (<>
           <Dashboard/>
    </>
    ),
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    {/* <BrowserRouter>
    <main className='dark text-foreground bg-background'>
      <App />
    </main>
      
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </NextUIProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
