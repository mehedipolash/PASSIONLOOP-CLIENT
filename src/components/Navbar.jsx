import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const defaultProfilePhoto = "https://ui-avatars.com/api/?name=User&background=random";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      // .catch((error) => console.error(error));
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "hover:text-primary";

  // Separate class for mobile links - always visible
  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-bold text-sm"
      : "text-gray-800 hover:text-primary font-medium text-sm transition-colors duration-150";

  return (
    <>
      <nav
        className="bg-[#E6EEC9] shadow-md px-4 py-3"
        style={{ position: "relative", zIndex: 9999 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-accent">
            PassionLoop
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/allGroups" className={navLinkClass}>All Groups</NavLink>
            <NavLink to="/createGroup" className={navLinkClass}>Create Group</NavLink>
            <NavLink to="/myGroups" className={navLinkClass}>My Groups</NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Desktop auth */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              {user ? (
                <>
                  <button onClick={handleSignOut} className="btn btn-primary btn-sm">
                    Logout
                  </button>
                  <div className="relative group">
                    <img
                      src={user.photoURL || defaultProfilePhoto}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary cursor-pointer"
                    />
                    <div className="absolute right-0 top-12 hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg z-50">
                      <p className="font-semibold">{user.displayName || "User"}</p>
                      <p className="text-gray-300">{user.email}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/auth/signin" className="btn btn-primary btn-sm">Login</Link>
                  <Link to="/auth/signup" className="btn btn-outline btn-primary btn-sm">Register</Link>
                </>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition shadow-md"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown — fixed position, always on top */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0"
            style={{ zIndex: 9998 }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="lg:hidden fixed top-16 right-4 flex flex-col rounded-xl p-4 w-52 gap-2 border border-gray-200"
            style={{
              zIndex: 9999,
              background: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            {/* Nav Links */}
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
              🏠 Home
            </NavLink>
            <NavLink to="/allGroups" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
              🌍 All Groups
            </NavLink>
            <NavLink to="/createGroup" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
              ➕ Create Group
            </NavLink>
            <NavLink to="/myGroups" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
              📋 My Groups
            </NavLink>

            <div className="h-px bg-gray-200 my-1" />

            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL || defaultProfilePhoto}
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover border-2 border-primary flex-shrink-0"
                  />
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => { handleSignOut(); setMenuOpen(false); }}
                  className="btn btn-primary btn-sm w-full mt-1"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/auth/signin"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary btn-sm w-full"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-outline btn-primary btn-sm w-full"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;