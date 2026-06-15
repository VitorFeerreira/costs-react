import styles from "./ProjectCard.module.css";
import {Link} from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
//Componente para exibir as informações de um projeto em um card
function ProjectCard({id, name, budget, category, handleRemove}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  }

  return(
    <div className={styles.project_card}>
      <h4 className={styles.project_card_h4}>{name}</h4>
      <p><span>Orçamento:</span>R$ {budget}</p>
      <p className={styles.category_text}>
        <span className={`${styles[category.name.toLowerCase()]}`}></span>
        {category.name}
      </p>
      <div className={styles.project_card_actions}>
       <Link to={`/project/${id}`}>
         <BsPencil />Editar
       </Link>

       <button onClick={remove}>
         <BsFillTrashFill /> Excluir
       </button>
      </div>
    </div>
  )
}

export default ProjectCard;