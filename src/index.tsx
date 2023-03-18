import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Products from './pages/Home';
import Cart from './pages/Cart';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from "react-router-dom"
import Login from './components/Login';
import AccDetails from './components/AccDetails';
import Account from './pages/Account';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
          
          <Route path="account" element={<Account />}>
            <Route path='login' element={<Login />} />
            <Route path='accdetails' element={<AccDetails />} />
          </Route>
    </Route>
     
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
