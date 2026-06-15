import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectsCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import API_URL from "../../components/service/Api"

function Projects() {
  //Estados para armazenar os projetos, o status de carregamento e a mensagem de sucesso
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  /*constante para armazenar a mensagem de sucesso */
  let message = "";
  if(location.state){
    message = location.state.message;
  }
  //Função para buscar os projetos cadastrados
  useEffect(() => {
    setTimeout(() => {
      fetch(`${API_URL}/projects`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      setProjects(data);
      setRemoveLoading(true);
    })
    .catch((err) => console.log(err));
    }, 300)
  }, []);
  //Função para remover um projeto
  function removeProject(id){
    fetch(`${API_URL}/projects/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }, })
      .then(resp => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch(err => console.log(err))
  }
  //Renderização do componente
  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meu Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
           <ProjectsCard 
           id={project.id}
           name={project.name}
           budget={project.budget}
           category={project.category}
           key={project.id}
           handleRemove={removeProject}
            />
       ))}
       {!removeLoading && <Loading />}
       {removeLoading && projects.length === 0 && (
        <p>Não há projetos cadastrados!</p>
       )}
      </Container>
    </div>
  )
}
export default Projects;