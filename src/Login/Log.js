import React from 'react';
import { Link } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './log.css';

const Log = ({handleSubmit,setEmail,setPassword}) => {
 

  return (
    <>
      <div className="center-containers">
        <ToastContainer />
        <div className="login-container">
          <h2 className="login_title">Login</h2>
          <form onSubmit={handleSubmit} id="loginForm">
            <div>
              <label className="password" htmlFor="email">
                E-mail:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="names_text"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="password" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="pwd_text"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <br />
            <p>
              Don't have an account?<Link to="/Register">Create New!</Link>
            </p>
            <br />
            <Link to="/Auth" className="for">
              Forgot password?
            </Link>
            <button type="submit" className="sub_text">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Log;
