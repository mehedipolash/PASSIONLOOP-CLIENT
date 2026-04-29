import React, { useState } from "react";
import { Link, NavLink } from "react-router";

// Temporary user state (replace later with Firebase/AuthContext)
const user = null;

// Default profile photo
const defaultProfilePhoto =
  "https://via.placeholder.com/150";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    console.log("User logged out");
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "hover:text-primary";

  return (
    <nav className="bg-[#35858E] shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between relative">
        
        {/* Logo - always left */}
        <Link to="/" className="text-2xl font-bold text-accent">
          PassionLoop
        </Link>

        {/* Desktop centering container (hidden on mobile) */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/allGroups" className={navLinkClass}>All Groups</NavLink>
          <NavLink to="/createGroup" className={navLinkClass}>Create Group</NavLink>
          <NavLink to="/myGroups" className={navLinkClass}>My Groups</NavLink>
        </div>

        {/* Right side: mobile hamburger + desktop auth buttons */}
        <div className="flex items-center gap-3">
          {/* Auth buttons - visible on desktop only */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {user ? (
              <>
                <button onClick={handleSignOut} className="btn btn-primary btn-sm">
                  Logout
                </button>
                <Link to="/profile">
                  <img
                    src={user.photoURL || defaultProfilePhoto}
                    alt="User"
                    title={user.displayName || "User"}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                  />
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn btn-primary btn-sm">Login</Link>
                <Link to="/signup" className="btn btn-outline btn-primary btn-sm">Register</Link>
              </>
            )}
          </div>

          {/* Mobile menu button - visible only on < lg screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition shadow-md"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile dropdown menu (right‑aligned, same as before) */}
        <div
          className={`
            lg:hidden
            ${menuOpen ? "flex" : "hidden"}
            absolute right-0 top-full mt-2 flex-col bg-base-100 shadow-lg rounded-lg p-4 w-48 z-50
            text-accent font-medium gap-3
          `}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/allGroups" onClick={() => setMenuOpen(false)} className={navLinkClass}>All Groups</NavLink>
          <NavLink to="/createGroup" onClick={() => setMenuOpen(false)} className={navLinkClass}>Create Group</NavLink>
          <NavLink to="/myGroups" onClick={() => setMenuOpen(false)} className={navLinkClass}>My Groups</NavLink>

          {/* Auth buttons inside dropdown for mobile */}
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn btn-primary btn-sm w-full mt-1">Logout</button>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex justify-center mt-1">
                <img
                  src={user.photoURL || defaultProfilePhoto}
                  alt="User"
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                />
              </Link>
            </>
          ) : (
            <div className="flex flex-col gap-2 mt-1">
              <Link to="/signin" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-sm w-full">Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn btn-outline btn-primary btn-sm w-full">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;