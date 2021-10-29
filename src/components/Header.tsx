import { GoMarkGithub } from "react-icons/go";
import { RiEnglishInput } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";
import { GiSouthKorea } from "react-icons/gi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiUsaFlag } from "react-icons/gi";
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
import { fadeIn } from "../content/framer/variants";
import { useRouter } from 'next/router';
import Link from 'next/link';
import {useIntl} from 'react-intl';
import {scroller} from 'react-scroll';

function Header() {
    const {theme, setTheme} = useTheme();
    const { pathname, locale, query } = useRouter();
    const { formatMessage: f } = useIntl();
    const changeTheme = () =>{
        setTheme(theme === "light"? "dark" : "light");
    }
    return (
        <motion.nav variants={fadeIn("down")} initial="initial" animate="animate" className="header">
            <span className="header-logo">{f({ id: 'home.namelogo' })}</span>
            <ul>
                {/* <li>Home</li> */}
                <li onClick={() => {
                    scroller.scrollTo("skill", {smooth: "easeInOutQuad" });
                }}>
                    {f({ id: 'home.skill' })}
                </li>
                <li onClick={() => {
                    scroller.scrollTo("project", {smooth: "easeInOutQuad" });
                }}>
                    {f({ id: 'home.project' })}
                </li>
                <li onClick={() => {
                    scroller.scrollTo("contact", {smooth: "easeInOutQuad" });
                }}>
                    {f({ id: 'home.contact' })}
                </li>
            </ul>
            <div className="header-button">
                <button>
                    <a href="https://github.com/MERN-dr"  target="_blank" rel="noreferrer" >
                        <GoMarkGithub/>
                    </a>
                </button>
                
                {locale == "ko"? 
                    <Link href={{ pathname, query }} locale="en">
                        <button><GiUsaFlag/></button>
                        {/* <button><RiEnglishInput/></button> */}
                    </Link>
                    :
                    <Link href={{ pathname, query }} locale="ko">
                        <button><GiSouthKorea/></button>
                    </Link>
                } 

                <button onClick={changeTheme}>
                    {/* {theme && theme !== "light" ? <BsFillMoonStarsFill/>: <BsSunFill/>} */}
                    {theme && theme !== "light" ? <BsFillMoonStarsFill/>: <BsSunFill/>}
                </button>
            </div>
        </motion.nav>
    )
}

export default Header
