import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider,Route} from "react-router-dom";
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "Login",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


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
