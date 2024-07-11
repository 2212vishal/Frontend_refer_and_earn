import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Loginform({ setShowLoginForm, setIsLoggedIn }) {
  const [login, setLogin] = useState(true); // State to toggle between login and signup
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async () => {
    try {
      const response = await fetch('https://backend-refer-and-earn.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id); // Store userId in localStorage
        setIsLoggedIn(true); // Update parent component's state to indicate logged in
        toast.success('Login successful');
        console.log("Login successful", data);
        setShowLoginForm(false); // Close login form
      } else {
        const errorData = await response.json();
        toast.error(`Login failed: ${errorData.error}`);
        console.error("Login failed:", errorData.error);
      }
    } catch (error) {
      toast.error('Error during login. Please try again.');
      console.error("Error during login:", error);
    }
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('https://backend-refer-and-earn.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Registration successful! Please login.');
        console.log("Registration successful", data);
        setLogin(true); // Switch to login form after successful registration
      } else {
        const errorData = await response.json();
        toast.error(`Registration failed: ${errorData.error}`);
        console.error("Registration failed:", errorData.error);
      }
    } catch (error) {
      toast.error('Error during registration. Please try again.');
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="relative flex flex-col gap-2 bg-lightgray border rounded p-2 w-96">
      <ToastContainer />
      <button
        className="absolute top-2 right-2"
        onClick={() => setShowLoginForm(false)}
      >
        <ImCross className="w-[20px] h-[20px] text-gray-600" />
      </button>
      {!login ? (
        // Registration form
        <div className="flex flex-col gap-2 p-2">
          <h2 className="font-bold text-2xl">Register</h2>
          <div className="flex justify-between">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <button className="bg-blue-500 p-2 border rounded" onClick={handleSignup}>Register</button>
          <p>
            Already have an account?{" "}
            <button className="text-blue-500" onClick={() => setLogin(true)}>Login</button>
          </p>
        </div>
      ) : (
        // Login form
        <div className="flex flex-col gap-2 p-2">
          <h2 className="font-bold text-2xl">Login</h2>
          <div className="flex justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
              className="border rounded p-1"
            />
          </div>
          <button className="bg-blue-500 p-2 border rounded" onClick={handleLogin}>Login</button>
          <p>
            Not registered yet?{" "}
            <button className="text-blue-500" onClick={() => setLogin(false)}>Register</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Loginform;
