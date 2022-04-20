import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, ContainerForm, Buttons } from "../styles/form";
import { User } from "../context/UserContext";

import "../styles/form.css";
import "../index.css";

export function Register() {
  const [data, setData] = useState({
    usuario: "",
    password: "",
  });
  const navigate = useNavigate();
  const { register } = User();

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data.usuario, data.password);
    navigate("/login");
  };

  return (
    <ContainerForm>
      <Form action="" onSubmit={handleSubmit}>
        <h1>Registrate</h1>
        <input
          type="text"
          name="usuario"
          placeholder="nombre de usuario"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          onChange={handleChange}
        />
        <Buttons>
          <button>registrarme</button>
          <Link to="/login" className="link-to-login">
            Iniciar sesión
          </Link>
        </Buttons>
      </Form>
    </ContainerForm>
  );
}
