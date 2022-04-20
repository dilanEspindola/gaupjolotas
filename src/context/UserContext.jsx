import { createContext, useContext, useState } from "react";

export const context = createContext();

export const User = () => useContext(context);

export const UserProvider = ({ children }) => {
  const register = (usuario, password) => {
    console.log(usuario, password);
  };

  const login = (usuario, password) => {
    console.log(usuario, password);
  };

  return (
    <context.Provider value={{ register, login }}>{children}</context.Provider>
  );
};
