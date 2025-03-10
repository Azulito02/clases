import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { appfirebase } from "./firebaseconfig";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder al contexto
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth(appfirebase);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoggedIn(!!user); // Si hay usuario, isLoggedIn será true
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    const auth = getAuth(appfirebase);
    await signOut(auth);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
