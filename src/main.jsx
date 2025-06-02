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
import WorkProcess from './component/WorkProcess/WorkProcess.jsx';
import Testimonials from './component/Testimonials/Testimonials.jsx';
import PricingPlans from './component/PricingPlans/PricingPlans.jsx';
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
        path: '/portfolio',
        element: <Projects></Projects>,
        loader: () => fetch('/projects.json')
      },
      {
        path: '/services',
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/workProcess',
        element: <WorkProcess></WorkProcess>
      },
      {
        path: '/testimonials',
        element: <Testimonials></Testimonials>
      },
      {
        path: '/pricing',
        element: <PricingPlans></PricingPlans>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
