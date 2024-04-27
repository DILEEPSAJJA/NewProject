import React, { useState } from 'react';
import ParticlesComponent from '../components/particle';
import './Login.css';

function Login() {
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);

  const handleTeacherButtonClick = () => {
    setShowTeacherLogin(!showTeacherLogin);
    setShowStudentLogin(false); // Ensure student login is hidden
  };

  const handleStudentButtonClick = () => {
    setShowStudentLogin(!showStudentLogin);
    setShowTeacherLogin(false); // Ensure teacher login is hidden
  };

  return (
    <div className="con" id='chk'>
      <ParticlesComponent id="particles" />

      <div className='teacher'>
        Teacher <br/><br/><br/>
        <button className="my-button1" onClick={handleTeacherButtonClick}>Click Me</button>
      </div>

      <div className='student'>
        Student <br/><br/><br/>
        <button className="my-button1" onClick={handleStudentButtonClick}>Click Me</button>
      </div>

      {showTeacherLogin && (
        <div className={`login-container teacher show`}>
          <h2>Login</h2>
          {/* Your teacher login form goes here */}
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <br></br>
            <button type="submit">Login</button> 
          </form>
        </div>
      )}

      {showStudentLogin && (
        <div className={`login-container student show`}>
          <h2>Login</h2>
          {/* Your student login form goes here */}
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <br></br>
            <button type="submit">Login</button> 
          </form>
        </div>
      )}
    </div>
  )
}

export default Login;
