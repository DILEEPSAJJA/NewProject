// import './App.css';
// import ParticlesComponent from './components/particle';
// import Login from "./pages/Login";
// //import { Link } from "react-router-dom";
// import LandingPage from './pages/LandingPage';
// import SideBar from "./components/SideBar/SideBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Users from "./pages/Users";
// import Messages from "./pages/Messages";
// import FileManager from "./pages/FileManager";
// import Analytics from "./pages/Analytics";
// import Order from "./pages/Order";
// import Saved from "./pages/Saved";
// import Setting from "./pages/Setting";

// function App() {
//   return (
//     <div className="App">
//       <ParticlesComponent id="particles" />

//       <Router>
//       <LandingPage />
//         <SideBar>
//           <Routes>
//             {/* <Route path="/" element={<LandingPage />} />
//         <Route path="/Login" element={<Login />} /> */}
//             <Route path="/App" element={<Dashboard />} />
//             <Route path="/App/users" element={<Users />} />
//             <Route path="/App/messages" element={<Messages />} />
//             <Route path="/App/analytics" element={<Analytics />} />
//             <Route path="/App/file-manager" element={<FileManager />} />
//             <Route path="/App/order" element={<Order />} />
//             <Route path="/App/saved" element={<Saved />} />
//             <Route path="/App/settings" element={<Setting />} />

//             {/* <Route path="*" element={<> not found</>} /> */}
//           </Routes>
//         </SideBar>
//       </Router>

//     </div >
//   );
// }

// export default App;

import './App.css';
import './pages/Login.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticlesComponent from './components/particle';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from './pages/Dashboard';
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<AuthenticatedApp />} />
        </Routes>
      </Router>
    </div>
  );
}

function AuthenticatedApp() {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/file-manager" element={<FileManager />} />
        <Route path="/order" element={<Order />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </SideBar>
  );
}

export default App;
