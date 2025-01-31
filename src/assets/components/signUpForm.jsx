import styles from "../components styles/signUpForm.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  //const [Users ,setUsers] = useState({});
  const [username ,setUsername] = useState('');
  const [password ,setPassword] = useState('');
  const [confirmPassword ,setConfirmPassword] = useState('');
  const [email ,setEmail] = useState('');
  const [TEL ,setTel] = useState('');
  const [errors , setErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(username,password,confirmPassword,email,TEL));
    setIsSubmit(true);
    console.log({username:username,password:password,confirmPassword:confirmPassword,email:email,TEL:TEL})
    axios.post("http://localhost:3000/api/signup", {username:username,password:password,confirmPassword:confirmPassword,email:email,TEL:TEL})
                .then((response) => {
                    console.log(response.data);
                    setUsername('');
                    setPassword('');
                    setConfirmPassword('');
                    setEmail('');
                    setTel('');
                })
                .catch((err) => {
                    console.log(err);
                });
  }
  
  const validate = (username,password,confirmPassword,email,TEL) => {
   const errors = {};
   const telPattern = /^\+20\d{10}$/;
    const passwordPattern =/\d/;
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!username) {
      errors.username = "Username is required";
    }
  
    if(!password) {
       errors.password = "Password is required";
    
  }
  if(!confirmPassword) {
    errors.confirmPassword = "ConfirmPassword is required";
  }
  if(!email) {
    errors.email = "Email is required";
  }
  if(!TEL) {
    errors.tel = "TEL is required";
  }
  if(TEL && !telPattern.test(TEL)) {
    errors.tel = "TEL is not valid";
  }
  if(email && !emailPattern.test(email)) {
    errors.email = "Email is not valid";
  }
  if(confirmPassword &&!passwordPattern.test(password)) {
    errors.password = "Password is not valid";
  }
  if(password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  
  return errors;
}

  
 

  

  return (
    <div className={styles.signUpGroup}>
      <div className={styles.about}>
        <h2 className={styles.aboutHeading}>Our Goals</h2>
        <p className={styles.aboutText}>
          The primary goal of our National Railway Company is to establish a
          world-class transportation network that seamlessly connects regions,
          enhances economic growth, and fosters sustainable development. We aim
          to deliver reliable, efficient, and safe rail services that cater to
          the needs of passengers and freight, driving innovation and
          modernization across all operations. By prioritizing customer
          satisfaction, adopting cutting-edge technology, and investing in
          infrastructure, we strive to reduce environmental impact, promote
          regional integration, and contribute to national prosperity.
        </p>
      </div>
      <div className={styles.line}>
        <img src="../images/logo.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.signUpForm}>
        <form id="myForm" action="" className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.formHeading}>Sign Up</h1>
          <div className={styles.userGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" key={errors.length== 0 && isSubmit ? "1" : "2"} value={username} onChange={(e) => setUsername(e.target.value)} />
            <p className={styles.error}>{errors.username}</p>
          </div>
          <div className={styles.Email}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value )} />
            <p className={styles.error}>{errors.email}</p>
          </div>
          
          
            <div className={styles.passGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value )} />
              <p className={styles.error}>{errors.password}</p>
            </div>
            <div className={styles.passGroup}>
              <label htmlFor="Confirmpassword">Confirm Password</label>
              <input type="password" id="password" placeholder="Password" value={confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value )}/>
              <p className={styles.error}>{errors.confirmPassword}</p>
            </div>
          
            <div className={styles.phoneNumber}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="phone Number"
                pattern="+20[0-9]{10}"
                value ={TEL}
                onChange={(e) => setTel(e.target.value )}
              />
              <p className = {styles.error}>{errors.tel}</p>
              
            </div>
            <div>{Object.keys(errors).length == 0 && isSubmit ? <p className={styles.success}>Sign Up Successfully</p> : null }</div>
            <div className={styles.buttonDiv}>
              
                <button type="submit" className={styles.buttonGroup}>
                  Sign Up
                </button>
             
            </div>
            <Link to="/login" className={styles.signUp}>
              Already have an account, Login 
            </Link>
         
        </form>
      </div>
    </div>
  );
}


export default SignUpForm;
