import { useState } from "react";
import Card from "./Card";
import "./styles/Form.css";

const Form = () => {
  const [err, setErr] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [usuario, setUsuario] = useState({
    usuario: "",
    email: "",
    contrasena: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let regexUsuario = /^(?!\s).{3,}$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexContrasena = /^.{6,}$/;
    if (
      regexUsuario.test(usuario.usuario) &&
      regexEmail.test(usuario.email) &&
      regexContrasena.test(usuario.contrasena)
    ) {
      setMostrar(true);
      setErr(false);
    } else {
      setErr(true);
      setMostrar(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="form-label">Ingresa tu usuario</label>
          <input
            className="form-input"
            type="text"
            value={usuario.usuario}
            onChange={(e) =>
              setUsuario({ ...usuario, usuario: e.target.value })
            }
          />
        </div>
        <div className="form-container"> 
          <label className="form-label">Ingresa tu email</label>
          <input
            className="form-input"
            type="email"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </div>
        <div className="form-container">
          <label className="form-label">Ingresa tu contraseña</label>
          <input
            className="form-input"
            type="text"
            value={usuario.contrasena}
            onChange={(e) =>
              setUsuario({ ...usuario, contrasena: e.target.value })
            }
          />
        </div>

        <button>Enviar Form</button>
      </form>
      {mostrar ? (
        <Card
          usuario={usuario.usuario}
          email={usuario.email}
          contrasena={usuario.contrasena}
        />
      ) : null}
      {err ? (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      ) : null}
    </>
  );
};

export default Form;
