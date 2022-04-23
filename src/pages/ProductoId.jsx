import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

export const ProductoId = () => {
  const { productoId } = useParams();
  const { datos } = useDataContext();

  const getProduct = datos.find((product) => product._id == productoId);
  if (getProduct) {
    console.log(getProduct);
  } else {
    console.log("ndada");
  }

  return (
    <div>
      <h1>Id</h1>
    </div>
  );
};
