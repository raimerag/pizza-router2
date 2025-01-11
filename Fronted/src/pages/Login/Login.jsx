import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ContextUser } from "../../Context/UserContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const { logout } = useContext(ContextUser);
  const miAlert = () => {
    if (exito === true) {
      Swal.fire({
        title: "¡Logueado!",
        icon: "success",
      });
    }
    setExito(false);
  };
  const validarDatos = (e) => {
    e.preventDefault();
    const regex = /^.{6,}$/;

    if (!email.trim() || !contraseña.trim()) {
      setError(true);
      setExito(false);
      return;
    } else if (!regex.test(contraseña)) {
      Swal.fire({
        title: "¡Contraseña Invalida!",
        text: "Debe contener minimo 6 caracteres",
        icon: "error",
      });
      setExito(false);
      return;
    }

    setError(false);
    setEmail("");
    setContraseña("");
    setExito(true);
  };

  return (
    <>
      <form className="formulario p-5 m-5 text-center" onSubmit={validarDatos}>
        {error ? (
          <p class="alert alert-danger" role="alert">
            Todos los campos son obligatorios ❌
          </p>
        ) : null}

        <h2>Login</h2>
        <div className="form-group m-5">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingresa Tu Correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group m-5">
          <label>Contraseña</label>
          <input
            type="password"
            name="pass"
            className="form-control"
            placeholder="Ingresa Tu Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        {exito ? miAlert() : null}
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
