import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserProvider } from "./context/UserContext";
import { Bebidas } from "./pages/Bebidas";
import { Tamales } from "./pages/Tamales";
import { Guajolotas } from "./pages/Guajolotas";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Guajolotas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/tamales" element={<Tamales />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
