import styles from '../styles/signUpForm.module.css'
import {Link} from 'react-router-dom'

function SignUpForm(){

       return(
              
              <div className={styles.signUpGroup}>
                     <div className={styles.about}>
                            <h2 className={styles.aboutHeading}>Our Goals</h2>
                            <p className={styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                   and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                     </div>
                     <div className={styles.line}><img src='../images/logo.png' alt="logo" className={styles.logo}/></div>
                     <div className={styles.signUpForm}>
                             
                            <form id="myForm" action="" className={styles.form}>
                            <h1 className={styles.formHeading}>Sign Up</h1>
                            <div className={styles.userGroup}>
                                   <label htmlFor="username">Username</label>
                                   <input type="text" id='username' placeholder="Username" />
                            </div>
                            <div className={styles.Email}>
                                   <label htmlFor="Email">Email</label>
                                   <input type="Email" id='Email' placeholder="Email" />
                            </div>
                            <div className={styles.passGroup}>
                                   <label htmlFor="password">Password</label>
                                   <input type="password" id='password' placeholder="Password" />
                            </div>
                            <div className={styles.passGroup}>
                                   <label htmlFor="Confirmpassword">Confirm Password</label>
                                   <input type="password" id='Confirmpassword' placeholder="Confirm password" />
                            </div>
                            <div className={styles.phoneNumber}>
                                   <label htmlFor="phoneNumber">Phone Number</label>
                                   <input type="number" id='phoneNumber' placeholder="phone Number"/>
                            </div>
                            <div className={styles.buttonDiv}>
                                   <button type="submit" className={styles.buttonGroup} >Login</button>
                            </div>
                            <Link to="/login" className={styles.signUp}>Already have an account, Login </Link>
                            
                     </form>

                     </div>
                     
              </div>
       );
}
export default SignUpForm