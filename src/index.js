import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider,Route} from "react-router-dom";
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "App",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
    <RouterProvider router={router} />
);

// ReactDOM.render(
//   <React.StrictMode>
//   <RouterProvider router={router}/>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Route path="/App">
//         <App />
//       </Route>
//     </BrowserRouter>
//   </React.StrictMode>
// );
