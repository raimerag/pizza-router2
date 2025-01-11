import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Contexts } from "../../Context/MyContext";
import { useNavigate } from "react-router";

const CardPizza = ({ productos }) => {
  const navigate = useNavigate();
  const buscarPizza = (id) => {
    navigate(`/pizza/${id}`);
  };
  const { addToCart } = useContext(Contexts);
  return (
    <>
      {productos.map((pizza) => (
        <div className="col-6">
          <Card className="m-5" style={{ width: "18rem", height: "40rem" }}>
            <Card.Img
              style={{ height: "23rem" }}
              variant="top"
              src={pizza.img}
            />
            <Card.Body>
              <Card.Title className="text-center">
                <h2>{pizza.name}</h2>
              </Card.Title>
              <Card.Text className="text-center">
                <h5>Ingredientes</h5>
              </Card.Text>
              <Card.Text>
                {pizza.ingredients.map((e, i) => (
                  <li key={i}>🍕{e}</li>
                ))}
              </Card.Text>
              <Card.Text>
                <p className="text-center fs-5 text-danger">${pizza.price}</p>
              </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-between m-3">
              <Button
                className=""
                variant="dark"
                onClick={() => buscarPizza(pizza.id)}
              >
                Ver Más 👀
              </Button>
              <Button variant="dark" onClick={() => addToCart(pizza)}>
                Añadir 🛒
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardPizza;
