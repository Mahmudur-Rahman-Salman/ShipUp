import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import Loader from "../components/Loader/Loader";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // SIGN UP
  const signup = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name) {
        await updateProfile(result.user, { displayName: name });
      }

      setUser(result.user);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // SIGN IN
  const signin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const googleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // AUTH STATE OBSERVER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Global Loader
  if (loading) return <Loader />;

  
  const value = {
    user,
    loading,
    error,
    signup,
    signin,
    logout,
    googleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
