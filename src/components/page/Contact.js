import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className={styles.contact_container}>
      <h1>Contato</h1>

      <p>
        Este formulário é apenas demonstrativo para apresentar conhecimentos
        em React e manipulação de formulários.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Mensagem</label>
          <textarea
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
         <button className={styles.btn}type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
