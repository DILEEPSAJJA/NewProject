import React from 'react'
import ParticlesComponent from '../components/particle';
import './Login.css';

function Login() {
  return (
    <div className="App">
  <ParticlesComponent id="particles" />
  <div className='teacher'>
    Teacher <br/><br/><br/>
    <button className="my-button1">Click Me</button>
  </div>
  <div className='student'>
    Student <br/><br/><br/>
    <button className="my-button1">Click Me</button>
  </div>
</div>

  )
}

export default Login