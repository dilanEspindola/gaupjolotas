import { useEffect, useState } from "react";
import { GetGuajolotas } from "../services/GetGuajolotas";

export const GuajolotasDocs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:4000/guajolotas";

  useEffect(() => {
    GetGuajolotas(url)
      .then((datos) => setData(datos))
      .catch((error) => setError(error.message));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img
          src="https://res.cloudinary.com/dp9zv16le/image/upload/v1650605503/Rolling-1s-71px_m1bekn.svg"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="gualotas">
      {error && (
        <div className="loading">
          <h2>{error}</h2>
        </div>
      )}
      {!data
        ? null
        : data.map((guajolota) => (
            <div key={guajolota._id} className="single-guajolota">
              <img src={guajolota.imagen} alt={guajolota.nombre} />
              <div className="txt-precio-guajolota">
                <h2 className="nombre">{guajolota.nombre}</h2>
                <p className="precio">{guajolota.precio}</p>
              </div>
            </div>
          ))}
    </div>
  );
};
