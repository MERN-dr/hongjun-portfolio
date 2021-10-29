import React, {useState, useEffect} from 'react';
import { motion, useMotionValue, useSpring} from 'framer-motion';

function Project() {
    const [cursorXY, setCousorXY] = useState({x: -100, y: -100});
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = {damping: 25, stifness: 700};
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    useEffect(()=> {
        const moveCursor = (e: MouseEvent) =>{
            const x = e.clientX - 16;
            const y = e.clientY - 16;
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setCousorXY({x, y});
        };
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <>
            <div id="project"></div>
            {/* <motion.div className="cursor" style={{translateX:cursorXSpring,translateY:cursorYSpring }}></motion.div> */}
            <div className="project">
                <div className="links">
                    <div className="link-item">
                        <div className="link-item-padding"></div>
                        <a href="https://github.com/javajspproject"><span>Website</span></a>
                    </div>
                    <div  className="link-item">
                        <div className="link-item-padding"></div>
                        <a href="https://github.com/MERN-dr"> <span>Link</span></a>
                    </div>
                    <div className="link-item">
                        <div className="link-item-padding"></div>
                        <a href="https://github.com/php-organi"> <span>Branding</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
