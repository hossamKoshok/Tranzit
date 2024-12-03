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
          <ul>
            <li><Link to="/Booking">Booking</Link></li>
            <li><Link to="/Tourism">Tourism</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </div>
        
        <div className={styles.logindiv}>
        <LoginBar className={styles.loginBar}/>
        </div>
      </nav>
    </header>
  );
}
export default MainNav;