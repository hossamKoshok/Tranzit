import styles from '../styles/Home.module.css'
const Home = () => {
    return ( 
        <div className={styles.homePage}>
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
                        <label for="input" id={styles.labelFrom}>From</label>
                        <input type='text' className='fromTo'></input>
                     </li>
                     <li>
                        <label for="input" id={styles.labelTo}>To</label>
                        <input type='text' ></input>
                     </li>
                     <li>
                        <label for="input">Depart</label>
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
     );
}
 
export default Home;