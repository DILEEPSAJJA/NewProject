import React from 'react'
import { Link } from "react-router-dom";
import ParticlesComponent from '../components/particle';

function LandingPage() {
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
  )
}

export default LandingPage