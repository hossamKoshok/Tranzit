import styles from '../styles/signUpForm.module.css'
import {Link} from 'react-router-dom'

function SignUpForm(){

       return(
              
              <div className={styles.signUpGroup}>
                     <div className={styles.about}>
                            <h2 className={styles.aboutHeading}>Our Goals</h2>
                            <p className={styles.aboutText}>The primary goal of our National Railway Company is to establish a world-class transportation network that seamlessly connects regions, enhances economic growth, and fosters sustainable development. We aim to deliver reliable, efficient, and safe rail services that cater to the needs of passengers and freight, driving innovation and modernization across all operations. By prioritizing customer satisfaction, adopting cutting-edge technology, and investing in infrastructure, we strive to reduce environmental impact, promote regional integration, and contribute to national prosperity.</p>
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
                                   <input type="tel" id='phoneNumber' placeholder="phone Number" pattern='+20[0-9]{10}'/>
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