import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friend from './components/Friend/Friend';
import SingleFriend from './components/SingleFriend/SingleFriend';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>

//   }
// ])
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <First />
      },
      {
        path: 'friends',
        element: <Friend />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path: 'friend/:friendID',
        element: <SingleFriend />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path: 'posts',
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <SinglePost />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <h1>404 Page not found</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
