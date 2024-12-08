import styles from "../Pages style/FAQ.module.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ = () => {
    const questions = [
        {
            Qs: "Where is Cairo's main train station located?",
            Ans: "Cairo's main railway hub, Ramses Station (محطة رمسيس), is located in the heart of downtown Cairo. It serves as the central terminal for Egypt's national railway network."
        },
        {
            Qs: "How do I make a train reservation?",
            Ans: "Making a reservation is simple:\n\n1. Enter your departure and arrival cities\n2. Select your travel dates\n3. Choose the number of passengers (up to 8 per booking)\n4. Apply any eligible discounts\n5. Click 'Find Trains' to view available options\n\nYou can book tickets up to 11 months in advance."
        },
        {
            Qs: "What is the current Metro ticket price?",
            Ans: "The standard Metro ticket price is 15 L.E. for a single journey. Different fare options are available for students, seniors, and frequent travelers. Prices may vary based on the number of stations traveled."
        },
        {
            Qs: "What payment methods are accepted?",
            Ans: "We accept multiple payment methods including:\n\n• Credit/Debit cards (Visa, Mastercard)\n• Mobile wallets\n• Fawry Pay\n• Cash payment at station counters"
        },
        {
            Qs: "What is the luggage allowance on trains?",
            Ans: "Each passenger is allowed:\n\n• 2 pieces of hand luggage\n• Maximum weight of 23kg per piece\n• Maximum dimensions of 158cm (length + width + height)\n\nAdditional or oversized luggage may incur extra charges."
        }
    ];

    return (
        <div className={styles.FAQPage}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerSection}>
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our services and booking process</p>
                </div>
                
                <div className={styles.accordionSection}> 
                    <Accordion className={styles.accordion} allowZeroExpanded="true">
                        {questions.map((item, index) => (
                            <AccordionItem key={index} className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>
                                        {item.Qs}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    {item.Ans.split('\n').map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FAQ;