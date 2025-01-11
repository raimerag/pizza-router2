import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseñaDos, setContraseñaDos] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const miAlert = () => {
    if (exito === true) {
      Swal.fire({
        title: "¡Registro Exitoso!",
        icon: "success",
      });
    }
    setExito(false);
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const regex = /^.{6,}$/;

    if (!email.trim() || !contraseña.trim() || !contraseñaDos.trim()) {
      setError(true);
      return;
    } else if (!regex.test(contraseña) || !regex.test(contraseñaDos)) {
      Swal.fire({
        title: "¡Contraseña Invalida!",
        text: "Debe contener minimo 6 caracteres",
        icon: "error",
      });
      setError(true);
      return;
    } else if (contraseña !== contraseñaDos) {
      Swal.fire({
        title: "¡Contraseña Invalida!",
        text: "Deben ser iguales",
        icon: "error",
      });
      setError(true);
      setExito(false);
      return;
    }

    setError(false);
    setEmail("");
    setContraseña("");
    setContraseñaDos("");
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
        <div className="form-group m-5">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="passDos"
            className="form-control"
            placeholder="Repite tu Contraseña"
            onChange={(e) => setContraseñaDos(e.target.value)}
            value={contraseñaDos}
          />
        </div>
        {exito ? miAlert() : null}
        <button type="submit" className="btn btn-dark">
          Registrarme
        </button>
      </form>
    </>
  );
};

export default Register;
