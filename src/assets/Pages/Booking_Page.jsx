import { useState } from 'react';
import styles from '../Pages style/Booking_Page.module.css'
import { FaBusSimple } from "react-icons/fa6";
import { MdEventSeat } from "react-icons/md";

const Booking_Page = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    var [trainNum, setTrainNum] = useState(1);
    var [classtype, setClassType] = useState('ECO');

    const handleSeatClick = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            if (selectedSeats.length < 6) {
                setSelectedSeats([...selectedSeats, seatId]);
            } else {
                alert('Maximum 6 seats can be selected');
            }
        }
    };

    const renderSeats = (rowNum, seatsPerRow) => {
        return Array(seatsPerRow).fill().map((_, index) => {
            const seatId = `${rowNum}${String.fromCharCode(65 + index)}`;
            const isSelected = selectedSeats.includes(seatId);

            return (
                <div
                    key={seatId}
                    className={`${styles.seat} ${isSelected ? styles.selected : ''}`}
                    onClick={() => handleSeatClick(seatId)}
                >
                    {seatId}
                </div>
            );
        });
    };

    const remainingSeats = 6 - selectedSeats.length;

    return (
        <div className={styles.bookingPage}>
            <div className={styles.bookingContainer}>
                <div className={styles.train}>
                    <svg width="144" height="144" viewBox="0 0 144 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.trainArrow} onClick={() => { if (trainNum < 9) { setTrainNum(trainNum + 1) } }}>
                        <path d="M72 54L102 84L42 84L72 54Z" fill="#C4BEBE" />
                    </svg>

                    <div className={styles.trainNum}>{trainNum}</div>
                    <div className={styles.trainLayout}>
                        <div className={styles.seatMap}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((rowNum) => (
                                <div key={rowNum} className={styles.row}>
                                    <div className={styles.seats}>
                                        {renderSeats(rowNum, 2)}
                                    </div>
                                    <div className={styles.aisle}></div>
                                    <div className={styles.seats}>
                                        {renderSeats(rowNum + 12, 2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <svg width="144" height="144" viewBox="0 0 144 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.trainArrowdown} onClick={() => { if (trainNum > 1) { setTrainNum(trainNum - 1) } }}>
                        <path d="M72 54L102 84L42 84L72 54Z" fill="#C4BEBE" />
                    </svg>
                </div>
            </div>

            <div className={styles.bookingForm}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#000000', margin: '0.8rem 0rem 3rem 0rem' }}>Book Your Seat</h1>
                <div className={styles.bookingInputContainer}>
                    <div className={styles.bookingInput}>
                        <div className={styles.bookingInputFrom}>
                            <label htmlFor="input" id={styles.label}>
                                From
                            </label>
                            <input type="text" className="fromTo"></input>
                        </div>
                        <div className={styles.bookingInputTo}>
                            <label htmlFor="input" id={styles.label}>
                                To
                            </label>
                            <input type="text" className="fromTo"></input>
                        </div>
                        <div className={styles.bookingInputDate}>
                            <label htmlFor="input" id={styles.label}>
                                Date
                            </label>
                            <input type="date" className="date"></input>
                        </div>
                    </div>
                    <div className={styles.bookingType}>
                        <div className={styles.bookingTypeSelector}>
                            <label htmlFor="input" id={styles.labelype}>
                                <FaBusSimple /> Carriage Type
                            </label>
                            <select className={styles.carriageSelector}>
                                <option value="normal">Normal cart</option>
                                <option value="private">Private cart</option>
                                <option value="sleeping">Sleeping cart</option>
                            </select>
                        </div>
                        <div className={styles.classSelectorContainer}>
                            <label htmlFor="input" id={styles.labelype}>
                                Book Now
                            </label>
                            <div className={styles.classSelector}>

                                <select onChange={(e) => { setClassType(e.target.value) }}>
                                    <option value="ECO">ECO</option>
                                    <option value="ECO+">ECO+</option>
                                    <option value="LUX">LUX</option>
                                </select>
                                <button>Book</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={styles.bookingStats}>
                    <div className={styles.selectedSeats}>
                        <h4>Selected Seats: ({selectedSeats.length}/6)</h4>
                        <div className={styles.selectedSeatsList}>
                            {selectedSeats.map((seat) => (
                                <div key={seat} className={styles.selectedSeatsItem}>
                                    <MdEventSeat style={{ color: '#1EC524', fontSize: '1.5rem' }} />
                                    <label>
                                        Seat:   <span style={{ fontWeight: 600 }}>{seat}</span>
                                    </label>
                                    <label>
                                        Car:   <span style={{ fontWeight: 600 }}>{trainNum}</span>
                                    </label>
                                    <label>
                                        {classtype}
                                    </label>

                                </div>
                            ))}
                            <div className={styles.autoSelect}>
                                <input type="checkbox" className={styles.autoSelectCheckbox} />
                                <label htmlFor="input" id={styles.label}>
                                    Auto select seats
                                </label>
                                <input 
                                    type="number" 
                                    className={styles.autoSelectInput} 
                                    max={remainingSeats} 
                                    min="1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bookingStatsinfo}>
                        <div className={styles.bookingPhotos}>
                            <h4>Photos:</h4>
                        </div>
                        <div className={styles.bookingInfo}>
                            <h4>Travel Info:</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking_Page;