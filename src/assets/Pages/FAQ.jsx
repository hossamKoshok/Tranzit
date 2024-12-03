import styles from "../Pages style/FAQ.module.css"
import AccordionComp from "../components/AccordionComp.jsx";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const faq=()=>{
    const Quesions =
    [
        {
            Qs:"Where is Cairo train station?",
            Ans:"Its in Ramses Railway Station."
        },
        {
            Qs:"How do I make train reservation?",
            Ans:"Enter your departure and arrival cities and travel dates in the Fare Finder tool on the Home Page, or click the 'Book Now' button in the site header. Add any passenger discounts that you qualify for and the number of travelers, and click 'Find Trains'. You can book up to 8 passengers per reservation and reserve your tickets up to 11 months in advance. Available trains will be shown on the next page. When you find a train that meets your travel needs, click 'Add to Cart' above that train to continue your reservation."
        },
        {
            Qs:"What is the price of Metro ticket?",
            Ans:"The price is 15L.E."
        },
        {
            Qs:"How do I make train reservation?",
            Ans:"Enter your departure and arrival cities and travel dates in the Fare Finder tool on the Home Page, or click the 'Book Now' button in the site header. Add any passenger discounts that you qualify for and the number of travelers, and click 'Find Trains'. You can book up to 8 passengers per reservation and reserve your tickets up to 11 months in advance. Available trains will be shown on the next page. When you find a train that meets your travel needs, click 'Add to Cart' above that train to continue your reservation."
        }
    ]
    return(
        <div className={styles.FAQPage}>
            <div className={styles.headerdiv}>
                <h1>Top Frequently Asked Questions</h1>
            </div>
            <div className={styles.accordiondiv}> 
                <Accordion className={styles.accordion}>
                    {Quesions.map((element)=>(
                        <AccordionComp Qs={element.Qs} Ans={element.Ans}/>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
export default faq