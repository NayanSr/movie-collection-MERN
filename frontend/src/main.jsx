import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Route,RouterProvider,createRoutesFromElements from react-router &  createBrowserRouter from r-r-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Home from './pages/Home.jsx';
// import { createRoutesFromElements} from "react-router"

// Auth

// Restricted

const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} >
            <Route path='/' element={<Home/>}></Route>
        </Route>
    )
)


createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
 
)
