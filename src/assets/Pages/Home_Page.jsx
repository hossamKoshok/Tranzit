import { useState } from 'react';
import styles from "../Pages style/Home_Page.module.css"

const Home_Page = () => {
    const [activeTransport, setActiveTransport] = useState('Trains');
    const [activeTrip, setActiveTrip] = useState('One-way');

    return (
        <div>

            <div className={styles.HomePageDropDiv}>
                <img src={"../images/homePageDrop.png"} alt="logo" className={styles.dropImage} />
                <svg width="1920" height="592" viewBox="0 0 1920 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.dropSvg}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V591.898H1920V20.1302C1702.56 101.732 1364.53 154.159 984.912 154.159C574.923 154.159 213.451 93.0087 0 0Z" fill="white" />
                </svg>
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












        </div>
    );
}

export default Home_Page;