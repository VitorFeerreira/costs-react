import styles from "./Company.module.css";
function Company() {
  return (
    <div className={styles.company_container}>
      <h1>Sobre o Costs</h1>

      <p>
        O Costs é uma aplicação desenvolvida em React com o objetivo de
        gerenciar projetos e seus respectivos serviços.
      </p>

      <h2>Funcionalidades</h2>

      <ul>
        <li>Cadastro de projetos</li>
        <li>Controle de orçamento</li>
        <li>Adição e remoção de serviços</li>
        <li>Atualização de projetos</li>
        <li>Consumo de API REST</li>
      </ul>

      <h2>Tecnologias Utilizadas</h2>

      <ul>
        <li>React</li>
        <li>React Router DOM</li>
        <li>CSS Modules</li>
        <li>JSON Server</li>
        <li>Render</li>
        <li>GitHub Pages</li>
      </ul>
    </div>
  );
}
export default Company;