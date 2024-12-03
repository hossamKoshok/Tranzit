import { useState } from 'react';
import styles from "../Pages style/Home_Page.module.css"



const Home_Page = () => {
    const [activeTransport, setActiveTransport] = useState('Trains');
    const [activeTrip, setActiveTrip] = useState('One-way');
    const [news, setNews] = useState([
        {
            "title": "Egypt Receives First Velaro High-Speed Train",
            "description": "Egypt welcomed its first Velaro train designed for its 2,000 km high-speed electric rail network. This train, capable of speeds up to 250 km/h, aims to reduce travel time and enhance passenger comfort with modern amenities like internet access and power sockets.",
            "date": "2024-12-01",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "High-Speed Rail Network Progress in Egypt",
            "description": "The first line of Egypt's high-speed electric train network connects Ain Sokhna to Matrouh, spanning 675 km and 21 stations. The train is expected to carry 1–2.5 million passengers daily and significantly cut travel times across the country.",
            "date": "2024-11-30",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "Siemens Advances Egypt's Rail Infrastructure",
            "description": "Siemens Mobility unveiled its plan to deliver 41 high-speed Velaro trains for Egypt. These trains are designed to endure harsh desert climates, ensuring reliable operations across the 2,000 km rail system.",
            "date": "2024-11-25",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "Egypt's High-Speed Train Network Begins Operation",
            "description": "Egypt's first high-speed train line, connecting Ain Sokhna to Matrouh via Cairo, has begun partial operations. The project aims to connect over 80 cities across Egypt.",
            "date": "2024-12-01",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "Siemens Unveils High-Speed Velaro Train for Egypt",
            "description": "Siemens Mobility showcased the first Velaro high-speed train tailored for Egypt's sandy and hot climate. This is part of a 2,000-km rail network project.",
            "date": "2024-11-20",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "Construction Progress on Egypt's New Rail Network",
            "description": "Significant progress has been made on Egypt’s high-speed rail network, with 660 km of track laid in the Ain Sokhna to Matrouh corridor.",
            "date": "2024-12-02",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        },
        {
            "title": "Egypt Plans to Expand Rail Network Beyond Borders",
            "description": "The government announced plans to extend high-speed rail links to North African neighbors, fostering trade and regional connectivity.",
            "date": "2024-11-15",
            "image": "images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"
        }
    ]
    );

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
                {news.map((item, index) => (
                    <div className={styles.newsCard}>
                        <img src={item.image} alt="News 1" />
                        <div className={styles.newsContent}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className={styles.newsDate}>{item.date}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>










        </div>
    );
}

export default Home_Page;