import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import Loading from "../components/Loading";
import { IconsHome } from "../styles/homeStyles/home";
import { SingleProductDiv } from "../styles/singleProduct/singleProduct.css.js";
import "../styles/singleProduct/singleProduct.css";

export const ProductoId = () => {
  const { productoId } = useParams();
  const { datos } = useDataContext();
  const navigate = useNavigate();

  const getProduct = datos.find((product) => product._id == productoId);

  // console.log(getProduct);

  if (!getProduct) return <Loading />;

  return (
    <SingleProductDiv>
      <IconsHome>
        <span onClick={() => navigate("/")}>
          <i className="fa-solid fa-chevron-left back"></i>
        </span>
        <span>
          <i className="fa-solid fa-cart-shopping icon-cart-page-product"></i>
        </span>
      </IconsHome>

      <div className="desc-producto">
        <img src={getProduct.imagen} alt={getProduct.nombre} />
        <h1>{getProduct.nombre}</h1>
        <p>{getProduct.precio}</p>
        <div className="añadir">
          <span className="minus">
            <i className="fa-solid fa-minus"></i>
          </span>
          <p>1</p>
          <span className="plus">
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>

        <div className="sabor">
          {getProduct.sabor
            ? getProduct.sabor.map((sabor, index) => (
                <div key={index + 1}>
                  <h1>{sabor}</h1>
                </div>
              ))
            : null}
        </div>
        <div className="combo">
          {getProduct.bebidas ? (
            <div>
              <h1>Bebidas</h1>
              <p>
                Selecciona la bebida que mas te guste y disfruta de tu desayuno
              </p>
              {getProduct.bebidas.map((bebida) => {
                return (
                  <div key={bebida._id}>
                    <img src={bebida.imagen} alt="" />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </SingleProductDiv>
  );
};
