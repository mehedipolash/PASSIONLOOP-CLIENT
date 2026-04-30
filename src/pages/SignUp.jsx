// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";
// // import { AuthContext } from "../context/AuthContext";

// const SignUp = () => {
//   const { createUser } = useContext(AuthContext);
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);
//     const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

//     const name = restFormData.name;
//     const photo = restFormData.photo;

//     setPasswordError("");

//     // Name validation
//     if (name.length < 5) {
//       toast.error("Name must be at least 5 characters long.");
//       return;
//     }

//     // Photo URL validation
//     const imgRegExp = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
//     if (!imgRegExp.test(photo)) {
//       toast.error("Please enter a valid image URL (jpeg, png, gif, webp, svg).");
//       return;
//     }

//     // Password validation
//     if (!/[A-Z]/.test(password)) {
//       setPasswordError("Password must have at least one uppercase letter.");
//       return;
//     }
//     if (!/[a-z]/.test(password)) {
//       setPasswordError("Password must have at least one lowercase letter.");
//       return;
//     }
//     if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters long.");
//       return;
//     }

//     // Firebase sign-up
//     createUser(email, password)
//       .then((result) => {
//         const userProfile = {
//           email,
//           ...restFormData,
//           creationTime: result.user?.metadata?.creationTime,
//           lastSignInTime: result.user?.metadata?.lastSignInTime,
//         };

//         // Save user to database
//         fetch("http://localhost:3000/users", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(userProfile),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.insertedId) {
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Account created successfully!",
//                 confirmButtonText: "ok",
//                 timer: 1500,
//               });
//               form.reset();
//               navigate("/");
//             }
//           })
//           .catch((dbError) => {
//             console.error("Error saving user profile:", dbError);
//             Swal.fire({
//               position: "top-end",
//               icon: "error",
//               title: "Failed to save user data.",
//             });
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//         let errorMessage = "Something went wrong.";
//         if (error.code === "auth/email-already-in-use") {
//           errorMessage = "This email is already in use. Please use a different email.";
//         } else if (error.code === "auth/weak-password") {
//           errorMessage = "The password is too weak. Use a stronger password.";
//         } else if (error.code === "auth/invalid-email") {
//           errorMessage = "The email address is invalid. Please enter a valid email.";
//         }
//         Swal.fire({
//           title: "SignUp Failed",
//           text: errorMessage,
//           position: "top-end",
//           icon: "error",
//           confirmButtonText: "Try again",
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-sm bg-base-100 rounded-2xl shadow-xl border border-base-300 p-6">

//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 className="text-2xl font-bold text-accent">Create Account</h2>
//           <p className="text-base-content/60 mt-1 text-sm">
//             Join PassionLoop and start your hobby journey
//           </p>
//         </div>

//         <form onSubmit={handleSignUp} className="space-y-3">

//           {/* Name */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm font-medium text-base-content">Name</label>
//             <input
//               name="name"
//               type="text"
//               placeholder="Your full name"
//               required
//               className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm font-medium text-base-content">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="you@example.com"
//               required
//               className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
//             />
//           </div>

//           {/* Photo URL */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm font-medium text-base-content">Photo URL</label>
//             <input
//               name="photo"
//               type="url"
//               placeholder="https://example.com/avatar.jpg"
//               required
//               className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm font-medium text-base-content">Password</label>
//             <div className="relative">
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 required
//                 className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content text-sm"
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </button>
//             </div>
//             {passwordError && (
//               <p className="text-red-500 text-xs mt-1">{passwordError}</p>
//             )}
//             <ul className="text-xs text-base-content/50 mt-1 space-y-0.5 list-disc list-inside">
//               <li>At least 6 characters</li>
//               <li>One uppercase letter</li>
//               <li>One lowercase letter</li>
//             </ul>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="btn btn-outline-custom w-full py-2 rounded-lg bg-primary text-primary-content font-semibold hover:opacity-90 transition mt-1 text-sm"
//           >
//             Register
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center gap-3 my-4">
//           <div className="flex-1 h-px bg-base-300" />
//           <span className="text-xs text-base-content/50">OR</span>
//           <div className="flex-1 h-px bg-base-300" />
//         </div>

//         {/* Google */}
//         <button className="w-full py-2 rounded-lg border border-base-300 bg-base-100 hover:bg-base-200 transition flex items-center justify-center gap-3 font-medium text-base-content text-sm">
//           <svg className="w-4 h-4" viewBox="0 0 24 24">
//             <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//             <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//             <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//             <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//           </svg>
//           Sign Up with Google
//         </button>

//         {/* Login link */}
//         <p className="text-center text-xs mt-4 text-base-content/60">
//           Already have an account?{" "}
//           <Link to="/signin" className="text-primary font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignUp } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const saveUserToDB = (userProfile) => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account created successfully!",
            confirmButtonText: "ok",
            timer: 1500,
          });
          navigate("/auth/signin");
        }
      })
      .catch((dbError) => {
        console.error("Error saving user profile:", dbError);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to save user data.",
        });
      });
  };

  // ✅ Google Sign Up with emailVerified check
  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;

        // Block unverified Google accounts
        if (!user.emailVerified) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Unverified Account",
            text: "Your Google account email is not verified. Please use a verified Google account.",
            confirmButtonText: "OK",
          });
          return;
        }

        const userProfile = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          emailVerified: user.emailVerified,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        saveUserToDB(userProfile);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Google Sign Up Failed",
          text: error.message,
          position: "top-end",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

    const name = restFormData.name;
    const photo = restFormData.photo;

    setPasswordError("");

    // Name validation
    if (name.length < 5) {
      toast.error("Name must be at least 5 characters long.");
      return;
    }

    // Photo URL validation
    const imgRegExp = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
    if (!imgRegExp.test(photo)) {
      toast.error("Please enter a valid image URL (jpeg, png, gif, webp, svg).");
      return;
    }

    // Password validation
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    // Firebase sign-up
    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        form.reset();
        saveUserToDB(userProfile);
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = "Something went wrong.";
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use. Please use a different email.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "The password is too weak. Use a stronger password.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "The email address is invalid. Please enter a valid email.";
        }
        Swal.fire({
          title: "SignUp Failed",
          text: errorMessage,
          position: "top-end",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-base-100 rounded-2xl shadow-xl border border-base-300 p-6">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-accent">Create Account</h2>
          <p className="text-base-content/60 mt-1 text-sm">
            Join PassionLoop and start your hobby journey
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-3">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-base-content">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-base-content">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-base-content">Photo URL</label>
            <input
              name="photo"
              type="url"
              placeholder="https://example.com/avatar.jpg"
              required
              className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-base-content">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 rounded-lg border border-base-300 bg-base-200 focus:outline-none focus:border-primary text-base-content text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content text-sm"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
            <ul className="text-xs text-base-content/50 mt-1 space-y-0.5 list-disc list-inside">
              <li>At least 6 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
            </ul>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-outline-custom w-full py-2 rounded-lg bg-primary text-primary-content font-semibold hover:opacity-90 transition mt-1 text-sm"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-base-300" />
          <span className="text-xs text-base-content/50">OR</span>
          <div className="flex-1 h-px bg-base-300" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full py-2 rounded-lg border border-base-300 bg-base-100 hover:bg-base-200 transition flex items-center justify-center gap-3 font-medium text-base-content text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign Up with Google
        </button>

        {/* Login link */}
        <p className="text-center text-xs mt-4 text-base-content/60">
          Already have an account?{" "}
          <Link to="/auth/signin" className="text-[15px] font-semibold hover:underline text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;