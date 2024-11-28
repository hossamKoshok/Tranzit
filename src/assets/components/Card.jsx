import styles from "../styles/Card.module.css"
const Card = ({para ,img , alt} )=> {
    return(
        <div className={styles.card}>
            <img src={img} alt={alt} />
            <p>{para}</p>
        </div>
    )
}
export default Card