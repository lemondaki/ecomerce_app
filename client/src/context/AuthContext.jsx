import { useContext, createContext, useEffect, useState } from "react";
import { googleProvider, facebookProvider } from "../firebase.jsx";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).catch((err) => console.log(err));
  };

  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (emailRegister, passwordRegister) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, emailRegister, passwordRegister);
    } catch (err) {
      alert(err);
    }
  };

  const loginWithAcc = async (emailRegister, passwordRegister) => {
    try {
      const user = await signInWithEmailAndPassword(auth, emailRegister, passwordRegister);
      console.log(user);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // cleanUp function
    return () => unsubcribe();
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, facebookSignIn, logOut, register, loginWithAcc, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
