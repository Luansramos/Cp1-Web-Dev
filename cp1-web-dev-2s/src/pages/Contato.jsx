import React from "react";
import "./Contato.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-discord"></i>
        </div>
      </div>
      <div className="contact-right">
        <form>
          <label>
            Nome:
            <input type="text" />
          </label>
          <label>
            E-mail:
            <input type="email" />
          </label>
          <label>
            Mensagem:
            <textarea></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
