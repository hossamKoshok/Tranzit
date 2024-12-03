import styles from '../components styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/booking">Book Tickets</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: +20 2 xxxx xxxx</li>
                        <li>Email: contact@egyptianrailways.gov.eg</li>
                        <li>Address: Ramses Square, Cairo, Egypt</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Egyptian Railways. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 