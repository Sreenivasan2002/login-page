import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";


function App() {
  return(

<Router>
  


    <div className="loginBox">
      <h1 className="login">Log In</h1>


      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email"   />
      </div>

      <div>
        <label>Password:</label>
        <input type="email" placeholder="Enter your Password"   />
      </div>

      <button type="submit"> Login </button>


      <p>If u didn't Registered   <Link to="/Register">click here</Link>
      </p>

      <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>


    </div>



    </Router>
  );
  
}

export default App;
