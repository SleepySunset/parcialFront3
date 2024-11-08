import { useState } from "react";
import "./styles/Card.css"

function Card( {usuario, email, contrasena}) {
  const [verDatos, setVerDatos] = useState(false);
  const [texto, setTexto] = useState("Ver datos de login")
  const handleData = () =>{
    setVerDatos(!verDatos);
    setTexto(verDatos ? "Ver datos de login" : "Ocultar datos")
  }
  return (
    <div className="card">
      <h2 className="card-title">Hola {usuario}!</h2>
      <p className="card-desc">Tu cuenta se ha creado satisfactoriamente</p>
      <button className="card-btn" onClick={handleData}>{texto}</button>
      {verDatos && (
        <div>
        <p>Tu email es {email}</p>
        <p>Tu contraseña es {contrasena}</p>
      </div>
      )}
      
    </div>
  );
}

export default Card;
