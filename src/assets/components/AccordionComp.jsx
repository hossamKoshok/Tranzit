import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from "../Pages style/FAQ.module.css"

function AccordionComp({Qs,Ans}){
    return(
        <AccordionItem className={styles.accordion__item}>
            <AccordionItemHeading >
                <AccordionItemButton className={styles.accordion__button}>
                    {Qs}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.accordion__panel}>
                <p>
                    {Ans}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    )
}
export default  AccordionComp