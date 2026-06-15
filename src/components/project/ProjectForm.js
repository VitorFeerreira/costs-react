import { useEffect, useState } from "react";
import API_URL from "../../components/service/Api"
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  // Carregar as categorias do backend para o select
  useEffect(() => {
    fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  // Metodo para enviar os dados do form para o backend
  const submit = (e) => {
    e.preventDefault();
    //console.log(project);
    handleSubmit(project);
  };
  // Metodo dinamico para pegar os dados do form, usando o name do input para setar o valor do projeto
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }
  return (
    <form onSubmit={submit} className={styles.form}>
  <Input 
    type="text" 
    text="Nome do Projeto" 
    name="name" 
    placeholder="Insira o nome do projeto"
    handleOnChange={handleChange}
    value={project.name ? project.name : ''}
  />

  <Input 
    type="number" 
    text="Orçamento Total" 
    name="budget" 
    placeholder="Insira o orçamento total"
    handleOnChange={handleChange}
    value={project.budget ? project.budget : ''}
  />

  <Select
    name="category_id"
    text="Selecione a categoria"
    options={categories}
    handleOnChange={handleCategory}
    value={project.category ? project.category.id : ''}
  />

  <SubmitButton text={btnText}/>
</form>
  );
}

export default ProjectForm;
