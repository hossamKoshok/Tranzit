import styles from '../components styles/Form.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Form(){

       return(
              
                    
                     <div className={styles.loginForm}>
                             
                            <img src='../images/loginLogo.png' alt="logo" className={styles.formImage} />
                            <form id="myForm" action="" className={styles.formGroup}>
                    
                            <div className={styles.userGroup}>
                                   <label htmlFor="username">Username</label>
                                   <input type="text" id='username' placeholder="Username" />
                            </div>
                            <div className={styles.passGroup}>
                                   <label htmlFor="password">Password</label>
                                   <input type="password" id='password' placeholder="Password" />
                            </div>
                            <div className={styles.buttonDiv}>
                                   <button type="submit" className={styles.buttonGroup} >Login</button>
                            </div>
                            <Link to="/signup" className={styles.signUp}>Dont have an account, Sign up</Link>
                            <Link to="#" className={styles.forgotPassword}>Forgot Password?</Link>    

                     </form>

              </div>
             
       );
}
export default Form