import './App.css';
import ParticlesComponent from './components/particle';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className='content'>
        <center>LearnNdCrack</center>
        <div className="wrapper">
          <div className="typing-demo">
            virtual Learning World.
          </div>
        </div>
        <button className="my-button"><Link to="/Login">Click Me</Link></button>
      </div>
    
    </div>
  );
}

export default App;
// App.js

// import React from 'react';
// import './App.css';
// import ParticlesComponent from './components/particle';
// import { BrowserRouter as Router, Link } from 'react-router-dom'; 

// function App() {
//   return (
//     <Router> {/* Wrap your entire app in Router */}
//       <div className="App">
//         <ParticlesComponent id="particles" />
//         <div className='content'>
//           <center>LearnNdCrack</center>
//           <div className="wrapper">
//             <div className="typing-demo">
//               virtual Learning World.
//             </div>
//           </div>
//           <Link to="/next-page"> {/* Link to the NextPage component */}
//             <button className="my-button">Click Me</button>
//           </Link>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
