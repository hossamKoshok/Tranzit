import styles from "../components styles/Scenery.module.css"
import Form from "../components/Form"
function Scenery(){
  return(
    <div  className={styles.scenery}>
         <Form className={styles.form}/>
         
         <svg  viewBox="0 0 1440 200" className={styles.waves}><path fill="#FF635B" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,149.3C384,117,480,75,576,58.7C672,43,768,53,864,80C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
         <svg  viewBox="0 0 1440 250" className={styles.waves}><path fill="#E9271D" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,213.3C672,213,768,203,864,176C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
     
    

  );
}
export default Scenery;

