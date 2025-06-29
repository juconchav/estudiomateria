import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";

function Contact() {
  const [formularioEnviado, setFormularioEnviado] = useState(false); 

  const handleEnvio = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    console.log("envio formulario");
    setFormularioEnviado(true);

  };

  return (
    <>
      <header>Hola, gracias por visitarme!</header>
      <div className="bajada-contact">
        Email:
        <br />
        montkaba@gmail.com
        <br />
        Horarios taller:
        <br />
        L-V: 10 am – 5 pm.
        <br />
        S: 10 am - 1pm.
        <br />
        O
        <br />
        Contactame mediante el siguiente formulario:
      </div>
      {/* Attach handleContacto to the form's onSubmit event for proper form handling */}
      <form onSubmit={handleEnvio}>
        <input name="nombre" id="nombre" placeholder="Nombre completo" />
        <br />
        <input name="email" id="email" placeholder="email@email.com" />
        <br />
        <textarea name="consulta" id="consulta" placeholder="Ingresa tu consulta"></textarea>
        <br />
        {/* The submit button will trigger the form's onSubmit event */}
        <input id="submit" type="submit" value="ENVIAR" />
      </form>

      {formularioEnviado && <p style={{ textAlign: 'center',color: '#726659', font: "Lato"}}>¡Te contestaré pronto!</p>}

      <br />
      <Footer />
    </>
  );
}

export default Contact;