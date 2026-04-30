import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
  const { signInUser, googleSignUp } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome back, ${user.displayName || "User"}!`,
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
       
        let errorMessage = "Something went wrong. Please try again.";
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/invalid-credential"
        ) {
          errorMessage = "Invalid email or password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "The email address is invalid.";
        } else if (error.code === "auth/too-many-requests") {
          errorMessage = "Too many failed attempts. Please try again later.";
        } else if (error.code === "auth/user-disabled") {
          errorMessage = "This account has been disabled.";
        }
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;

        if (!user.emailVerified) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Unverified Account",
            text: "Your Google account email is not verified.",
            confirmButtonText: "OK",
          });
          return;
        }

        // ✅ Upsert — save if new, update lastSignInTime if existing
        const userProfile = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          emailVerified: user.emailVerified,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        fetch("https://passion-loop-server.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Welcome, ${user.displayName || "User"}!`,
              timer: 1500,
              showConfirmButton: false,
            });
            navigate(from, { replace: true });
          })
          .catch((err) => {
            
            
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        
        toast.error("Google sign in failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-base-100 rounded-2xl shadow-xl border border-base-300 p-6">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-accent">Welcome Back</h2>
          <p className="text-base-content/60 mt-1 text-sm">
            Sign in to continue your hobby journey
          </p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-3">

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
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-outline-custom w-full py-2 rounded-lg bg-primary text-primary-content font-semibold hover:opacity-90 transition mt-1 text-sm"
          >
            Login
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
          onClick={handleGoogleSignIn}
          className="w-full py-2 rounded-lg border border-base-300 bg-base-100 hover:bg-base-200 transition flex items-center justify-center gap-3 font-medium text-base-content text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign In with Google
        </button>

        {/* Register link */}
        <p className="text-center text-xs mt-4 text-base-content/60">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-600 font-semibold hover:underline text-[15px]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;