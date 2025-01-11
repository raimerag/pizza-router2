import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CardPizza from "../../components/Cardpizza/CardPizza";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  const getApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const res = await fetch(url);
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <CardPizza productos={productos} />
        </div>
      </div>
    </>
  );
};

export default Home;
