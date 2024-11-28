import styles from "../styles/Home.module.css";
import Word from "./Word.jsx";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.merger}>
        <div className={styles.trainSelector}>
          <ul>
            <li>
              <button>Trains</button>
            </li>
            <li>
              <button>Trams</button>
            </li>
            <li>
              <button>Metro</button>
            </li>
          </ul>
        </div>
        <div className={styles.homeBookingWidget}>
          <div className={styles.tripSelector}>
            <ul>
              <li>
                <button>One-way</button>
              </li>
              <li>
                <button>Round-trip</button>
              </li>
              <li>
                <button>Multi-stop</button>
              </li>
            </ul>
          </div>

          <div className={styles.inputData}>
            <ul>
              <li>
                <label htmlFor="input" id={styles.labelFrom}>
                  From
                </label>
                <input type="text" className="fromTo"></input>
              </li>
              <li>
                <label htmlFor="input" id={styles.labelTo}>
                  To
                </label>
                <input type="text"></input>
              </li>
              <li>
                <label htmlFor="input">Depart</label>
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
      <div className={styles.word}>
        <Word text={"Latest update"}></Word>
        <div className={styles.twoCards}>
          <Card
            className={styles.firstCard}
            para={"Egypt had the first RailWay system in Africa "}
            img={"../../../images/95c0fa6eef2af43e5627b0d88c5f0b7f.jpg"}
            alt={"train1"}
          ></Card>{" "}
          <Card
            className={styles.card}
            para={"Train 2"}
            img={"../../../images/fc96d460af8ebc1ffd603add17a79827.jpg"}
            alt={"train2"}
          ></Card>{""}
        </div>
      </div>
      <div className={styles.supporters}><Word text = {"Our Supporters"}></Word>
      <img src="../../../images/ae6b48d03b6614254df9b28c9ba17250 (1).png" alt="logos of different companies" />
      </div>
      
    </div>
  );
};

export default Home;
