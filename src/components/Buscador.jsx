import "../index.css";
import "../styles/buscador/buscador.css";

export const Buscador = () => {
  return (
    <div className="buscar">
      <form action="">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="search"
          placeholder="Sabor de Guajolota, bebida..."
          className="buscador"
        />
      </form>
    </div>
  );
};
