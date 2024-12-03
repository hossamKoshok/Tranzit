import styles from "../Pages style/About.module.css"
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";


const about=()=>{
    return(
        <div className={styles.AboutPage}>

            <div className={styles.headerdiv}>
                <h1>About us</h1>
                <ul>
                    Our goal in this is project to achieve the following:
                    <li>Build upon the goverment's website and enhancing it</li>
                    <li>Design Userinterface that can be easly accessed and used by all Users.</li>
                    <li>Making the website as efficient as possible.</li>
                    <li>Produce a product to be good representative to the country's.</li>
                </ul>
                <PiPhoneCallFill className={styles.iconContact}/> <p>+99999999</p>
                <MdEmail className={styles.iconEmail}/><p> train.egy@gmail.com</p>
            </div>
        </div>
    )
}

export default about