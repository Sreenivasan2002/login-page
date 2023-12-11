import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="loginBox">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Register from "./Register";
// import Home from "./Home";
// import Login from "./Login";

// function App() {
//   return (
//     <Router>
//       <div className="loginBox">
//         <h1 className="login">Log In</h1>

//         <div>
//           <label>Email:</label>
//           <input type="email" placeholder="Enter your email" />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input type="password" placeholder="Enter your Password" />
//         </div>

//         <button type="submit"> Login </button>

//         <p>
//           If you didn't Registered <Link to="/register">click here</Link>
//         </p>

//         <Routes>
//           <Route path="/Register" element={<Register />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Home" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
