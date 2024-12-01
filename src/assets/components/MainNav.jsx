import styles from '../components styles/MainNav.module.css'
import LoginBar from './LoginBar';
import { Link } from 'react-router-dom';
function MainNav(){
  const menu = ["Booking", "Tourism", "FAQ", "About"];
  
  
  return(
    <header>
      <nav>
        <div className={styles.logodiv}>
          <Link to="/"><img src='../images/logo.png' alt="logo" className={styles.logo}/></Link>
        </div>

        <div className={styles.navdiv}>
        {menu.map((element) => (
          <ul key={element}>
            <li>
              <a href="http://">{element}</a>
            </li>
          </ul>
        ))}
        </div>
        
        <div className={styles.logindiv}>
        <LoginBar className={styles.loginBar}/>
        </div>
      </nav>
    </header>
  );
}
export default MainNav;