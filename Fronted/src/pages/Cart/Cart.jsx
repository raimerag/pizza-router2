import { useContext, useMemo } from "react";
import Button from "react-bootstrap/Button";
import { Contexts } from "../../Context/MyContext";
import { ContextUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(Contexts);

  const { user } = useContext(ContextUser);
  const novisible = useMemo(() => cart.length === 0, [cart]);
  const UserNoLogin = useMemo(() => user === false);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column ">
            {cart.map((pizza) => (
              <div
                key={pizza.id}
                className="d-flex mt-2 m-3"
                style={{ height: "20rem" }}
              >
                <div className="d-flex align-self-center">
                  <img
                    style={{ width: "15rem", height: "12rem" }}
                    variant="top"
                    src={pizza.img}
                  />
                </div>
                <div
                  className="d-flex align-self-center"
                  style={{ width: "25rem" }}
                >
                  <h2 className="d-flex m-3 text-center align-self-center text-danger">
                    {pizza.name}
                  </h2>
                  <p className="d-flex m-4 text-center align-self-center fw-bolder fs-4">
                    Precio: {pizza.price}
                  </p>
                </div>
                <div className="d-flex align-self-center ms-3">
                  <Button
                    style={{ width: "3rem", height: "3rem" }}
                    className="ms-2 p-1"
                    variant="dark"
                    type="button"
                    onClick={() => decreaseQuantity(pizza.id)}
                  >
                    <p>-</p>
                  </Button>
                  <div className="m-2">{pizza.quantity}</div>
                  <Button
                    style={{ width: "3rem", height: "3rem" }}
                    className="ms-2"
                    variant="dark"
                    type="button"
                    onClick={() => increaseQuantity(pizza.id)}
                  >
                    <p>+</p>
                  </Button>
                  <Button
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "30px",
                    }}
                    className="ms-5 p-2"
                    variant="danger"
                    type="button"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    <p>X</p>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {novisible ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="text-center">
              <h3 className=" mt-5">EL CARRITO ESTA VACIO</h3>
              <Link to="/" className="nav-link mt-5">
                <Button variant="dark">volver </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="m-5">
            <div className="d-flex justify-content-center">
              <Button variant="outline-danger" size="lg">
                {UserNoLogin ? (
                  <p>Por Favor Inicie Sesion</p>
                ) : (
                  <p>Total a Pagar ${cartTotal}</p>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
