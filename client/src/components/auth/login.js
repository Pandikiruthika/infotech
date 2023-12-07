
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
console.log('kk')
  const handleLogin = async () => {
    
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      })
      
      .then((res) => {
    
        let tokens = res.data.token;
        sessionStorage.setItem("token", tokens);
        if (res.status === 200) {
          window.location = "/getcustomer";
        } else {
          console.log("error in login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>Create a newAccount 
        <a href="/createuser " className="underline text-blue">
                  Click Here
                </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
