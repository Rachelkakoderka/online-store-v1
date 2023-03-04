import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Products from './pages/Products';
import Cart from './pages/Cart';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
          {/* 
          do dodania w przyszłości
          <Route path="help">
            <Route path='faq' element={<Faq />} />
            <Route path='contact' element={<Contact />} />

          </Route> */}
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
