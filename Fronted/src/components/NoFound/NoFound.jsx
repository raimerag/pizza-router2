import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1>Esta Ruta no Existe</h1>
          <Link to="/volver">
            <button type="submit" className="btn btn-danger">
              Volver a Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoFound;
