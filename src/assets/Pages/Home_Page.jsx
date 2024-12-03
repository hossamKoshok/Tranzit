import { useState } from 'react';
import styles from "../Pages style/Home_Page.module.css"

const Home_Page = () => {
    const [activeTransport, setActiveTransport] = useState('Trains');
    const [activeTrip, setActiveTrip] = useState('One-way');

    return (
        <div className={styles.HomePageDiv}>

            <div className={styles.HomePageDropDiv}>
                
                <div className={styles.quickSearchBarDiv}>
                        <div className={styles.trainSelector}>
                            <ul>
                                <li>
                                    <button 
                                        className={activeTransport === 'Trains' ? styles.activeButton : ''}
                                        onClick={() => setActiveTransport('Trains')}
                                    >
                                        Trains
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className={activeTransport === 'Trams' ? styles.activeButton : ''}
                                        onClick={() => setActiveTransport('Trams')}
                                    >
                                        Trams
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className={activeTransport === 'Metro' ? styles.activeButton : ''}
                                        onClick={() => setActiveTransport('Metro')}
                                    >
                                        Metro
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.homeBookingWidget}>
                            <div className={styles.tripSelector}>
                                <ul>
                                    <li>
                                        <button 
                                            className={activeTrip === 'One-way' ? styles.activeTripButton : ''}
                                            onClick={() => setActiveTrip('One-way')}
                                        >
                                            One-way
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className={activeTrip === 'Round-trip' ? styles.activeTripButton : ''}
                                            onClick={() => setActiveTrip('Round-trip')}
                                        >
                                            Round-trip
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className={activeTrip === 'Multi-stop' ? styles.activeTripButton : ''}
                                            onClick={() => setActiveTrip('Multi-stop')}
                                        >
                                            Multi-stop
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.inputData}>
                                <ul>
                                    <li className={styles.inputDatafrom}>
                                        <label htmlFor="input" id={styles.labelFrom}>
                                            From
                                        </label>
                                        <input type="text" className="fromTo"></input>
                                    </li>
                                    <li className={styles.inputDataLto}>
                                        <label htmlFor="input" id={styles.labelTo}>
                                            To
                                        </label>
                                        <input type="text"></input>
                                    </li>
                                    <li className={styles.inputDataLdate}>
                                        <label htmlFor="input" id={styles.labelDepart}>Depart</label>
                                        <input type="date"></input>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.classSelector}>
                                <ul>
                                    <li>
                                        <select>
                                            <option value="Class">Class</option>
                                        </select>
                                    </li>
                                    <li>
                                        <button>Search</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                </div>
            </div>

            <div className={styles.newsDiv}>
                <h1 className={styles.newsHeader}>Latest News: </h1>
                <div className={styles.newsContainer}>
                    
                </div>
            </div>










        </div>
    );
}

export default Home_Page;