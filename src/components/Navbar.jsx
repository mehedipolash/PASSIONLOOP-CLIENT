// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";

// // Temporary user state (replace later with Firebase/AuthContext)
// const user = null;

// // Default profile photo
// const defaultProfilePhoto = "https://via.placeholder.com/150";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleSignOut = () => {
//     console.log("User logged out");
//   };

//   const navLinkClass = ({ isActive }) =>
//     isActive ? "text-primary font-semibold" : "hover:text-primary";

//   return (
//     <nav className="bg-[#E6EEC9] shadow-md px-4 py-3">
//       <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between relative">
//         {/* Logo - always left */}
//         <Link to="/" className="text-2xl font-bold text-accent">
//           PassionLoop
//         </Link>

//         {/* Desktop centering container (hidden on mobile) */}
//         <div className="hidden lg:flex lg:items-center lg:gap-6 absolute left-1/2 transform -translate-x-1/2">
//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>
//           <NavLink to="/allGroups" className={navLinkClass}>
//             All Groups
//           </NavLink>
//           <NavLink to="/createGroup" className={navLinkClass}>
//             Create Group
//           </NavLink>
//           <NavLink to="/myGroups" className={navLinkClass}>
//             My Groups
//           </NavLink>
//         </div>

//         {/* Right side: mobile hamburger + desktop auth buttons */}
//         <div className="flex items-center gap-3">
//           {/* Auth buttons - visible on desktop only */}
//           <div className="hidden lg:flex lg:items-center lg:gap-3">
//             {user ? (
//               <>
//                 <button
//                   onClick={handleSignOut}
//                   className="btn btn-primary btn-sm"
//                 >
//                   Logout
//                 </button>
//                 <Link to="/profile">
//                   <img
//                     src={user.photoURL || defaultProfilePhoto}
//                     alt="User"
//                     title={user.displayName || "User"}
//                     className="w-10 h-10 rounded-full object-cover border-2 border-primary"
//                   />
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/auth/signin" className="btn btn-primary btn-sm">
//                   Login
//                 </Link>
//                 <Link
//                   to="/auth/signup"
//                   className="btn btn-outline btn-primary btn-sm"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile menu button - visible only on < lg screens */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition shadow-md"
//           >
//             <span className="w-6 h-0.5 bg-white"></span>
//             <span className="w-6 h-0.5 bg-white"></span>
//             <span className="w-6 h-0.5 bg-white"></span>
//           </button>
//         </div>

//         {/* Mobile dropdown menu (right‑aligned, same as before) */}
//         <div
//           className={`
//             lg:hidden
//             ${menuOpen ? "flex" : "hidden"}
//             absolute right-0 top-full mt-2 flex-col bg-base-100 shadow-lg rounded-lg p-4 w-48 z-50
//             text-accent font-medium gap-3
//           `}
//         >
//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className={navLinkClass}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/allGroups"
//             onClick={() => setMenuOpen(false)}
//             className={navLinkClass}
//           >
//             All Groups
//           </NavLink>
//           <NavLink
//             to="/createGroup"
//             onClick={() => setMenuOpen(false)}
//             className={navLinkClass}
//           >
//             Create Group
//           </NavLink>
//           <NavLink
//             to="/myGroups"
//             onClick={() => setMenuOpen(false)}
//             className={navLinkClass}
//           >
//             My Groups
//           </NavLink>

//           {/* Auth buttons inside dropdown for mobile */}
//           {user ? (
//             <>
//               <button
//                 onClick={handleSignOut}
//                 className="btn btn-primary btn-sm w-full mt-1"
//               >
//                 Logout
//               </button>
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex justify-center mt-1"
//               >
//                 <img
//                   src={user.photoURL || defaultProfilePhoto}
//                   alt="User"
//                   title={user.displayName || "User"}
//                   className="w-10 h-10 rounded-full object-cover border-2 border-primary"
//                 />
//               </Link>
//             </>
//           ) : (
//             <div className="flex flex-col gap-2 mt-1">
//               <Link
//                 to="/signin"
//                 onClick={() => setMenuOpen(false)}
//                 className="btn btn-primary btn-sm w-full"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 onClick={() => setMenuOpen(false)}
//                 className="btn btn-outline btn-primary btn-sm w-full"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
      .catch((error) => console.error(error));
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "hover:text-primary";

  return (
    <nav className="bg-[#E6EEC9] shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between relative">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-accent">
          PassionLoop
        </Link>

        {/* Desktop Nav Links - centered */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 absolute left-1/2 transform -translate-x-1/2">
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
                <button
                  onClick={handleSignOut}
                  className="btn btn-primary btn-sm"
                >
                  Logout
                </button>

                {/* Avatar with email tooltip */}
                <div className="relative group">
                  <img
                    src={user.photoURL || defaultProfilePhoto}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary cursor-pointer"
                  />
                  {/* Tooltip */}
                  <div className="absolute right-0 top-12 hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg z-50">
                    <p className="font-semibold">{user.displayName || "User"}</p>
                    <p className="text-gray-300">{user.email}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/auth/signin" className="btn btn-primary btn-sm">
                  Login
                </Link>
                <Link to="/auth/signup" className="btn btn-outline btn-primary btn-sm">
                  Register
                </Link>
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

        {/* Mobile dropdown */}
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

          {user ? (
            <>
              {/* Mobile avatar + info */}
              <div className="flex items-center gap-2 border-t border-base-300 pt-3 mt-1">
                <img
                  src={user.photoURL || defaultProfilePhoto}
                  alt="User"
                  className="w-9 h-9 rounded-full object-cover border-2 border-primary flex-shrink-0"
                />
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-base-content truncate">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-xs text-base-content/50 truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => { handleSignOut(); setMenuOpen(false); }}
                className="btn btn-primary btn-sm w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2 mt-1">
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
      </div>
    </nav>
  );
};

export default Navbar;