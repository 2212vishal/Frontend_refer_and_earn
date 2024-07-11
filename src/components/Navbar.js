import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginform from "./Loginform";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable for login status
  const [showLoginForm, setShowLoginForm] = useState(false); // State to control login form visibility
  // Check if user is logged in based on token presence in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, []);

  // Handler for login/logout button click
const handleLoginLogout = async () => {
    if (isLoggedIn) {
      // Perform backend logout
      try {
        const userId = localStorage.getItem('id'); // Retrieve userId from localStorage
        const response = await fetch('https://backend-refer-and-earn.onrender.com/api/users/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Send token in headers for authorization
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }), // Send userId in the request body
        });
  
        if (response.ok) {
          localStorage.removeItem('token'); // Remove token from localStorage
          localStorage.removeItem('userId'); // Remove userId from localStorage
          setIsLoggedIn(false); // Update isLoggedIn state
          toast.success('Logout successful'); // Show toast message on logout
        } else {
          const errorData = await response.json();
          toast.error(`Logout failed: ${errorData.message}`);
          console.error("Logout failed:", errorData.message);
        }
      } catch (error) {
        toast.error('Error during logout. Please try again.');
        console.error("Error during logout:", error);
      }
    } else {
      // Show login form if not logged in
      setShowLoginForm(true);
    }
  };
  

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <h1 className="text-3xl text-white">Accredian</h1>
      
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-2xl ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="ml-10">
          <button
            onClick={handleLoginLogout}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <ImCross className="w-[28px] h-[28px] text-white" />
          ) : (
            <TiThMenu className="w-[28px] h-[28px] text-white" />
          )}
        </div>

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar bg-black`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mt-4">
              <button
                onClick={handleLoginLogout}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Conditional rendering of Loginform */}
      {showLoginForm && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50">
          <Loginform setShowLoginForm={setShowLoginForm} setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}

      {/* Toast notifications */}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
