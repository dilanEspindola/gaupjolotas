import { useState, useEffect } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import Loading from "./Loading";

export const TamalesDoc = () => {
  const [tamales, setTamales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData(productosURL, "tamales")
      .then((data) => setTamales(data))
      .catch((error) => setError(error.message));
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="gualotas">
      {error && (
        <div className="loading">
          <h2>{error}</h2>
        </div>
      )}
      {!tamales
        ? null
        : tamales.map((tamal) => (
            <div key={tamal._id} className="single-guajolota">
              <img src={tamal.imagen} alt={tamal.nombre} />
              <div className="txt-precio-guajolota">
                <h2 className="nombre">{tamal.nombre}</h2>
                <p className="precio">{tamal.precio}</p>
              </div>
            </div>
          ))}
    </div>
  );
};
