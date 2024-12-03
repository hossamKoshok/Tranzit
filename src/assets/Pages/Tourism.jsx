import styles from '../Pages style/Tourism.module.css';
import { useState } from 'react';

const Tourism = () => {
    const [selectedCategory, setSelectedCategory] = useState('popular');

    const destinations = {
        popular: [
            {
                title: "The Great Pyramids of Giza",
                image: "https://media.istockphoto.com/id/1434687699/photo/the-sphinx-by-the-pyramids-of-giza-in-the-desert-of-egypt.jpg?s=612x612&w=0&k=20&c=hEBN84UmuM7iTYs7LffRz_kPsgt_B-_NLc9iOOhpkMs=",
                description: "One of the Seven Wonders of the Ancient World, the Pyramids of Giza are iconic symbols of Egypt's rich history.",
                trainInfo: "Take a train to Giza Station from Ramses Station (30 minutes)"
            },
            {
                title: "Luxor Temple",
                image: "https://egyptunitedtours.com/wp-content/uploads/2021/01/Luxor-Temple5.jpg",
                description: "Ancient Egyptian temple complex located in Luxor (ancient Thebes), built around 1400 BCE.",
                trainInfo: "Direct trains available from Cairo to Luxor (10 hours)"
            },
            {
                title: "Alexandria Corniche",
                image: "https://content.r9cdn.net/rimg/himg/05/aa/44/leonardo-335644-154497913-229206.jpg?width=1200&height=630&crop=true",
                description: "Beautiful waterfront promenade featuring the historic Citadel of Qaitbay and modern library.",
                trainInfo: "Regular trains from Cairo to Alexandria (2.5 hours)"
            }
        ],
        historical: [
            {
                title: "Valley of the Kings",
                image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/41668/cms/565387/940x500-1-50-235f80f00b2a456e04b8fc8fbc76756d.jpg",
                description: "Ancient burial ground of Egyptian royalty, featuring spectacular decorated tombs.",
                trainInfo: "Take a train to Luxor, then local transport to the valley"
            },
            {
                title: "Abu Simbel Temples",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoFC9fHYKWXf7mDsH4ywcoOTHwihfPDq7Dw&s",
                description: "Massive temples carved into solid rock, built by Ramesses II.",
                trainInfo: "Train to Aswan, then organized tour to Abu Simbel"
            }
        ],
        beaches: [
            {
                title: "Sharm El Sheikh",
                image: "https://content.r9cdn.net/rimg/dimg/df/2c/94762a60-city-20452-1651040efcc.jpg?width=1366&height=768&xhint=2147&yhint=1584&crop=true",
                description: "Popular resort town with beautiful beaches and world-class diving spots.",
                trainInfo: "Connect via bus from nearest train station"
            },
            {
                title: "Hurghada",
                image: "https://hurghadiansproperty.com/wp-content/uploads/2023/12/Downloaderla-657f005ab3db3.jpg",
                description: "Coastal beach resort town offering water sports and marine life.",
                trainInfo: "Train services available through Qena"
            }
        ]
    };

    return (
        <div className={styles.tourismPage}>
            <div className={styles.hero}>
                <h1>Discover Egypt by Rail</h1>
                <p>Explore ancient wonders and modern attractions connected by our railway network</p>
            </div>

            <div className={styles.categorySelector}>
                <button 
                    className={`${styles.categoryButton} ${selectedCategory === 'popular' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('popular')}
                >
                    Popular Destinations
                </button>
                <button 
                    className={`${styles.categoryButton} ${selectedCategory === 'historical' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('historical')}
                >
                    Historical Sites
                </button>
                <button 
                    className={`${styles.categoryButton} ${selectedCategory === 'beaches' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('beaches')}
                >
                    Beaches & Resorts
                </button>
            </div>

            <div className={styles.destinationsGrid}>
                {destinations[selectedCategory].map((destination, index) => (
                    <div key={index} className={styles.destinationCard}>
                        <div className={styles.imageContainer}>
                            <img src={destination.image} alt={destination.title} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{destination.title}</h3>
                            <p>{destination.description}</p>
                            <div className={styles.trainInfo}>
                                <h4>How to Get There:</h4>
                                <p>{destination.trainInfo}</p>
                            </div>
                            <button className={styles.bookButton}>Book Train Tickets</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.travelTips}>
                <h2>Travel Tips</h2>
                <div className={styles.tipsGrid}>
                    <div className={styles.tipCard}>
                        <h3>Best Time to Visit</h3>
                        <p>October to April offers the most comfortable temperatures for sightseeing.</p>
                    </div>
                    <div className={styles.tipCard}>
                        <h3>Train Travel</h3>
                        <p>Book first-class train tickets for longer journeys. Consider overnight sleeper trains to maximize your time.</p>
                    </div>
                    <div className={styles.tipCard}>
                        <h3>Local Customs</h3>
                        <p>Dress modestly when visiting religious sites. Always carry water and sun protection.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourism; 