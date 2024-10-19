import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Address from "../component/Address";
import User from "../component/User";
import Github, { githubInfoLoader } from "../component/Github";

// const router= createBrowserRouter([
//     {
//         path:"/",
//         element:<App/>,
//         children:[

//             {
//                 path:"",
//                 element:<Home/>
//             },

//             {
//                 path:"about",
//                 element:<About/>
//             },

//             {
//                 path:'contact',
//                 element:<Contact/>
//             },

//             {
//                 path:"address",
//                 element:<Address/>
//             }

//         ]

//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="address" element={<Address />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" loader={githubInfoLoader} element={<Github />} />
    </Route>
  )
);

export default router;
