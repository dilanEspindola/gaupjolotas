import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";

export const context = createContext();

export const User = () => useContext(context);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const register = async (usuario, password) => {
    try {
      const res = await axios({
        url: "http://localhost:4000/users/register",
        data: {
          usuario: usuario,
          password: password,
        },
        withCredentials: false,
        method: "POST",
      });
      if (res.data.userCreated === false) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "El usuario ya existe",
        }).then((success) => navigate("/register"));
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (usuario, password) => {
    try {
      const res = await axios.post("http://localhost:4000/users/login", {
        usuario,
        password,
      });
      if (!res.data.auth) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "usuario y/o contraseña no valido(s)",
        }).then((success) => navigate("/login"));
      }
      if (res.data.auth === true) {
        localStorage.setItem("sesion", res.data.token);
        localStorage.setItem("usuario", res.data.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "😄",
          text: "usuario validado",
          showConfirmButton: false,
          timer: 1500,
        })
          .then((success) => navigate("/"))
          .catch((error) => navigate("/login"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider value={{ register, login }}>{children}</context.Provider>
  );
};
