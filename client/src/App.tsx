// import React from 'react';
// import './App.css';
// import Report from "./pages/Report";
// import Dashboard from "./pages/Dashboard";
// import {Routes, Route} from 'react-router-dom';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       {/* <Report/> */}
//       <Dashboard/>
//     </div>
//   );
// }

// export default App;
import * as React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
// import Home from "./components/Home";
// import Private from "./components/Private";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">

          {currentUser && (
            <li className="nav-item">
              <Link to={"/dashboard"}>
                <a className = "nav-link">
                  Dashboard
                </a>
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/report"} >
                <a className = "nav-link">
                   Dashboard
                </a>
              </Link>
            </li>
          )}

        </div>

        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"}>
                <a className = "nav-link">
                  Login
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"}>
                <a className = "nav-link">
                  Sign up
                </a>
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/private" element={<Private />} /> */}
          <Route path="/details" element={<Report />}/>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signups" element={<Signups />} /> */}
          {/* <Route path="/logins" element={<Logins />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
