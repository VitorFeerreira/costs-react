import styles from './Loading.module.css';
import loading from '../../img/loading.svg';
//Componente para exibir um indicador de carregamento enquanto os dados estão sendo buscados
function Loading(){
  return(
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading..." />
    </div>
  )
}
export default Loading;