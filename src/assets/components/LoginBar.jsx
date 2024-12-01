import styles from '../components styles/LoginBar.module.css'
import {Link} from 'react-router-dom'

function LoginBar(){
    return (  
        <div className={styles.LoginBarGroup}>    
            
            <div className={styles.usernameBar}>
                <img src="../images/Avatar.png" alt="Avtar"className={styles.avatarImage}/ >
                <Link to="/login" htmlFor="Username" className={styles.userLabel}>Login</Link>
            </div>

        </div>
    );
}
 
export default LoginBar;
   

