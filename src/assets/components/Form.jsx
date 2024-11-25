import styles from '../styles/Form.module.css'

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

                     </form>

              </div>
             
       );
}
export default Form