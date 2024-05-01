import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './pages/home';

import ErrorPage from './pages/error';
import About from './pages/about';
import Blog  from './pages/blog';
import ShowPost, {loader as postLoader} from "./pages/show";
import Chat from './pages/chat';

import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
    errorElement: <ErrorPage />,
 
  children: [
    {
      index: true,
      element: <Blog to="/blog" replace  /> 
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "blog",
      element: <Blog />
    },
    {
      path: "chat",
      element: <Chat />
    },
    {
      path: "post/:postId",
      element: <ShowPost />,
      loader: postLoader,
    },

  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
