import { motion } from "framer-motion";
import {fadeIn, staggerContainer} from "../content/framer/variants";
import {useIntl} from 'react-intl';
import {scroller} from 'react-scroll';

function TextContainer() {
    const { formatMessage: f } = useIntl();
    return (
        <motion.div className="textContainer" variants={staggerContainer} initial="initial" animate="animate">
            <div className="textContainer-top">
                <motion.span variants={fadeIn()} className="first-letter:text-5xl">
                    {f({ id: 'home.greeting' })}
                </motion.span>
            </div>
            
            {/* variants={fadeInUP} initial="initial" animate="animate"  */}
            <motion.div variants={fadeIn()} initial="initial" animate="animate" className="textContainer-middle">
                <span>{f({ id: 'home.job' })}</span>
            </motion.div>  


            <div className="textContainer-bottom">
                <motion.button variants={fadeIn()}
                onClick={() =>{
                    scroller.scrollTo("contact",{
                    duration: 1500,
                    delay: 100,
                    smooth: "easeInOutQuad",
                    offset: 50,})
                }}>
                {f({ id: 'home.contactme' })}
                </motion.button>
                <motion.p variants={fadeIn()}>
                    I show You What I 
                    <span onClick={() =>{
                        scroller.scrollTo("skill",{
                        duration: 1500,
                        delay: 100,
                        smooth: "easeInOutQuad",
                        offset: 50,})
                    }}>Got</span>
                </motion.p>
            </div>
        </motion.div>
    )
}

export default TextContainer
