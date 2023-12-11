import React from "react";


function Register() {
    return(
      <div className="RegisterBox">
        <h1 className="login">Register</h1>
  
  
        <div>
          <label>Name:</label>
          <input type="name" placeholder="Enter your name"   />
        </div>

        <div>
          <label>Mobile no:</label>
          <input type="number" placeholder="Enter your mobile number"   />
        </div>


        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email"   />
        </div>
  
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your Password"   />
        </div>
  
        <button type="submit"> Submit </button>
    

  
      </div>
    );
    
  }
  
  export default Register;
  