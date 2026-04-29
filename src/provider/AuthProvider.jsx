

// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { createContext } from "react";
// import { auth } from "../firebase.config";

// export const AuthContext = createContext(null);

// const provider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignUp = () => {
//     return signInWithPopup(auth, provider);
//   };

//   const userInfo = {
//     createUser,
//     signInUser,
//     googleSignUp,
//   };

//   return <AuthContext value={userInfo}>{children}</AuthContext>;
// };

// export default AuthProvider;




import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ prevents flicker on refresh

  // ✅ Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // cleanup on unmount
  }, []);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleSignUp = () =>
    signInWithPopup(auth, provider);

  const signOutUser = () =>
    signOut(auth);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignUp,
    signOutUser,
  };

  return (
    <AuthContext value={userInfo}>
      {!loading && children}
    </AuthContext>
  );
};

export default AuthProvider;