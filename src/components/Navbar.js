import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NotepadText } from 'lucide-react';

const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("LogOut SuccessFully","warning")
    navigate("/login");
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-black/60 to-black/10 backdrop-blur-md h-16">
        <div className="flex items-center justify-between mr-auto px-4 py-3">
          <img src="" alt="" />
          <NotepadText size={32} className="text-orange-400 mx-1" />
          <Link className="text-white text-2xl pl-1 mr-auto" to="/">NoteSphere</Link>

          <ul className="hidden lg:flex space-x-4 justify-center items-center">

            <li className={`relative overflow-hidden active:bottom-1 group rounded shadow border-b border-orange-400 ${location.pathname === '/' ? 'bg-orange-400' : ''}`}>
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 rounded"></span>
              <Link
                className={`relative z-10 ${location.pathname === '/' ? 'text-white' : 'text-white hover:text-gray-400'} px-3 py-2 transition duration-300 block`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className={`relative overflow-hidden active:bottom-1 group rounded shadow border-b border-orange-400 ${location.pathname === '/about' ? 'bg-orange-400' : ''}`}>
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 rounded"></span>
              <Link
                className={`relative z-10 ${location.pathname === '/about' ? 'text-white' : 'text-white hover:text-gray-400'} px-3 py-2 transition duration-300 block`}
                aria-current="page"
                to="/about"
              >
                about
              </Link>
            </li>

            <li className={`relative overflow-hidden group active:bottom-1 rounded shadow border-b border-orange-400 ${location.pathname === '/addnotes' ? 'bg-orange-400' : ''}`}>
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 rounded"></span>
              <Link
                className={`relative z-10 ${location.pathname === '/addnotes' ? 'text-white' : 'text-white hover:text-gray-400'} px-3 py-2 transition duration-300 block`}
                aria-current="page"
                to="/addnotes"
              >
                Add Notes
              </Link>
            </li>

            <li className={`relative overflow-hidden active:bottom-1 group rounded shadow border-b border-orange-400 ${location.pathname === '/savednotes' ? 'bg-orange-400' : ''}`} style={{ marginRight: "250px" }}>
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 rounded"></span>
              <Link
                className={`relative z-10 ${location.pathname === '/savednotes' ? 'text-white' : 'text-white hover:text-gray-400'} px-3 py-2 transition duration-300 block`}
                aria-current="page"
                to="/savednotes"
              >
                Saved Notes
              </Link>
            </li>

            {localStorage.getItem("token") ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="ml-24 text-orange-600 hover:text-black hover:bg-orange-400 border-b border-t border-l border-r border-orange-600 hover:border-orange-400 px-3 py-2 rounded transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    className="text-orange-600 hover:text-black hover:bg-orange-400 border-b border-t border-l border-r  border-orange-600 hover:border-orange-400 px-3 py-2 rounded transition duration-300"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black bg-orange-400 hover:bg-orange-500  px-3 py-2 rounded transition duration-300"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>

          <button
            className="text-white lg:hidden block"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
