import { createContext, useContext, useEffect, useState } from "react";

import { createUser, getUser, updateUser } from "../services/userService";
import * as auth from "../services/authService";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => {
      setUser(null);
      sessionStorage.removeItem(tokenKey);
    });
  }

  function updateProfile(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
  };

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
