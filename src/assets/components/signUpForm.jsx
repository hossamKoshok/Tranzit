import styles from "../styles/signUpForm.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
       const initvalues = { username: "omar", password: "", confirmPassword: ""  , email: "" , TEL: "" };
  const [Users ,setUsers] = useState([initvalues]);
  const [errors , setErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(Users));
    setIsSubmit(true);
  }
  const validate = (users) => {
   const errors = {};
   const telPattern = /^\+20\d{10}$/;
//     const passwordPattern = /^w/;
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!users.username) {
      errors.username = "Username is required";
    }
//     else if(Users.find((user) => user.username === users.username)) {
//       errors.username = "Username already exists";
//     }
    if(!users.password) {
       errors.password = "Password is required";
    
  }
  if(!users.confirmPassword) {
    errors.confirmPassword = "ConfirmPassword is required";
  }
  if(!users.email) {
    errors.email = "Email is required";
  }
  if(!users.TEL) {
    errors.tel = "TEL is required";
  }
  if(users.TEL && !telPattern.test(users.TEL)) {
    errors.tel = "TEL is not valid";
  }
  if(users.email && !emailPattern.test(users.email)) {
    errors.email = "Email is not valid";
  }
//   if(users.confirmPassword &&!passwordPattern.test(users.password)) {
//     errors.password = "Password is not valid";
//   }
  if(users.password !== users.confirmPassword) {
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
            <input type="text" id="username" placeholder="Username" value={Users.username} onChange={(e) => setUsers({ ...Users, username: e.target.value })} />
            <p className={styles.error}>{errors.username}</p>
          </div>
          <div className={styles.Email}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" value={Users.email} onChange={(e) => setUsers({ ...Users, email: e.target.value })} />
            <p className={styles.error}>{errors.email}</p>
          </div>
          
          
            <div className={styles.passGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password"  value={Users.password} onChange={(e) => setUsers({ ...Users, password: e.target.value })} />
              <p className={styles.error}>{errors.password}</p>
            </div>
            <div className={styles.passGroup}>
              <label htmlFor="Confirmpassword">Confirm Password</label>
              <input type="password" id="password" placeholder="Password" value={Users.confirmPassword} onChange = {(e) => setUsers({ ...Users, confirmPassword: e.target.value })}/>
              <p className={styles.error}>{errors.confirmPassword}</p>
            </div>
          
            <div className={styles.phoneNumber}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="phone Number"
                pattern="+20[0-9]{10}"
                value ={Users.TEL}
                onChange={(e) => setUsers({ ...Users, TEL: e.target.value })}
              />
              <p className = {styles.error}>{errors.tel}</p>

            </div>
            <div>{Object.keys(errors).length === 0 && isSubmit? (<div className={styles.success}> Form submitted successfully</div>) : ""}</div>

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
