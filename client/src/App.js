
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/login";
import  CreateAccountForm from "./components/auth/signup";
import UserProfile from "./components/auth/getuser"
import { useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        {sessionStorage.token !== null && sessionStorage.token !== undefined ? (
          
          <Routes>
            
            <Route path="/getcustomer" element={<UserProfile />} />
          </Routes>
         ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="user" element={< CreateAccountForm />} />
            
          </Routes>
        )}
        
      </Router>
    </>
  );
}

export default App;
