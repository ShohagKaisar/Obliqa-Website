import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import AboutObliqa from './component/AboutObliqa/AboutObliqa.jsx';
import ContactForm from './component/ContactForm/ContactForm.jsx';
import Projects from './component/Projects/Projects.jsx';
import ServiceDetails from './component/ServiceDetails/ServiceDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <AboutObliqa></AboutObliqa>
      },
      {
        path: '/contact',
        element: <ContactForm></ContactForm>
      },
      {
        path: '/project',
        element: <Projects></Projects>
      },
      {
        path: '/ServiceDetails',
        element: <ServiceDetails></ServiceDetails>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
