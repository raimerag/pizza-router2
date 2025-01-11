import { useState } from "react";

const Profile = () => {
  const [email, setEmail] = useState("usuario@correo.com");

  const validarDatos = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="formulario p-5 m-5 text-center" onSubmit={validarDatos}>
        <h2>¡Hola {email}! ¿deseas cerrar session?</h2>
        <div className="form-group m-5">
          <label>Ingresa tu Usuario</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Usuario"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Cerrar Session
        </button>
      </form>
    </>
  );
};

export default Profile;
