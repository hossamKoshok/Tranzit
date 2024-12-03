import styles from "../Pages style/About.module.css"
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const About = () => {
    return (
        <div className={styles.AboutPage}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <h1>About Us</h1>
                    <p className={styles.mission}>
                        We are committed to revolutionizing Egypt's railway transportation system 
                        by providing a modern, efficient, and user-friendly booking platform.
                    </p>
                </div>

                <div className={styles.goalsSection}>
                    <h2>Our Objectives</h2>
                    <div className={styles.goalsList}>
                        <div className={styles.goalItem}>
                            <h3>Enhanced User Experience</h3>
                            <p>Building upon the government's infrastructure to deliver a seamless 
                            and intuitive booking experience for all users.</p>
                        </div>
                        
                        <div className={styles.goalItem}>
                            <h3>Accessibility</h3>
                            <p>Designing an interface that ensures easy access and navigation 
                            for users of all technical backgrounds.</p>
                        </div>
                        
                        <div className={styles.goalItem}>
                            <h3>Efficiency</h3>
                            <p>Optimizing every aspect of the booking process to save our 
                            users' time and provide real-time information.</p>
                        </div>
                        
                        <div className={styles.goalItem}>
                            <h3>National Pride</h3>
                            <p>Creating a platform that represents Egypt's commitment to 
                            modernization and technological advancement.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.contactSection}>
                    <h2>Contact Information</h2>
                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <PiPhoneCallFill className={styles.iconContact}/>
                            <p>+20 2 xxxx xxxx</p>
                        </div>
                        <div className={styles.contactItem}>
                            <MdEmail className={styles.iconEmail}/>
                            <p>contact@egyptianrailways.gov.eg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;