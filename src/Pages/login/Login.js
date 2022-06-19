import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Login.scss';

const Login = () => {
  // const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:5000/';
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}api/user/auth`, {
        username: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('incorrect password or username');
      });

    console.log(email, password);
    closeOpen();
  };

  const closeOpen = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className="loginNew" onSubmit={handleSubmit}>
      <h3>Login Page</h3>
      <input
        label="Email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        label="Password"
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-button">
        <button onClick={closeOpen}>Cancel</button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
