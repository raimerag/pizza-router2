import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Contexts } from "../../Context/MyContext";

const Pizza = () => {
  const [api, setApi] = useState([]);
  const { addToCart } = useContext(Contexts);

  useEffect(() => {
    getApiPizza();
  }, []);

  const getApiPizza = async () => {
    const url = `http://localhost:5000/api/pizzas/${params.id}`;
    const res = await fetch(url);
    const data = await res.json();
    setApi([data]);
  };

  const params = useParams();
  console.log(params.id);
  return (
    <>
      {api.map((api) => (
        <div className="d-flex justify-content-center">
          <Card className="m-5" style={{ width: "30rem", height: "auto" }}>
            <Card.Img style={{ height: "23rem" }} variant="top" src={api.img} />
            <Card.Body>
              <Card.Title className="text-center">
                <h2>{api.name}</h2>
              </Card.Title>
              <Card.Text>{api.desc}</Card.Text>

              <Card.Text className="text-center">
                <h3>Ingredientes</h3>
              </Card.Text>
              <Card.Text>
                {api.ingredients.map((e, i) => (
                  <li key={i}>🍕{e}</li>
                ))}
              </Card.Text>
              <Card.Text>
                <p className="text-center fs-3 text-danger">${api.price}</p>{" "}
              </Card.Text>
            </Card.Body>
            <div className="d-flex m-2 justify-content-center">
              <Button size="lg" variant="dark" onClick={() => addToCart(api)}>
                Añadir 🛒
              </Button>
            </div>
          </Card>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <Link to="/" className="nav-link">
          <Button variant="dark">volver </Button>
        </Link>
      </div>
    </>
  );
};

export default Pizza;
