import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from 'react-router-dom';
import API_URL from "../../components/service/Api"

function NewProject() {
  const navigate = useNavigate();
  
  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];
    // Carregar os dados do form para o backend
    fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    
    //Metodo para pegar a resposta do backend e redirecionar para a página de projetos
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // redirect
      navigate("/projects", {
  state: {
    message: 'Projeto criado com sucesso!'
  }
});
    })
    .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;