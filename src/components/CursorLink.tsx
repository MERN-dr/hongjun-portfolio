// import React, {useState, useEffect} from 'react';
// import { motion, useMotionValue, useSpring} from 'framer-motion';

// function App() {
//     const [cursorXY, setCousorXY] = useState({x: -100, y: -100});
//     const cursorX = useMotionValue(-100);
//     const cursorY = useMotionValue(-100);
//     const springConfig = {damping: 25, stifness: 700};
//     const cursorXSpring = useSpring(cursorX, springConfig);
//     const cursorYSpring = useSpring(cursorY, springConfig);
    
//     useEffect(()=> {
//         const moveCursor = (e: MouseEvent) =>{
//             const x = e.clientX - 16;
//             const y = e.clientY - 16;
//             cursorX.set(e.clientX - 16);
//             cursorY.set(e.clientY - 16);
//             setCousorXY({x, y});
//         };
//         window.addEventListener('mousemove', moveCursor)
//         return () => {
//             window.removeEventListener('mousemove', moveCursor)
//         }
//     }, [])
//     return (
//         <div className="App">
//             {/* <motion.div className="cursor" style={{transform=`translate3d(${cursorXY.x}px, ${cursorXY.y}px,0)`,}}></motion.div> */}
//             <motion.div className="cursor" style={{translateX:cursorXSpring,translateY:cursorYSpring }}></motion.div>
//         </div>
//     )
// }

// .cursor{
//     position: fixed;
//     left: 0;
//     top: 0;
//     width: 32px;
//     height: 32px;
//     border-radius: 16px;
//     background-color: black; 
//     mix-blend-mode: different;
//     backgrond-color: white;
// }
// *{
//     cursor: none;
// }


Title.js
import React from 'react';
export default ({title, setActiveIndex, index}) => {
    onmouseenter = { () =>{setActiveIndex(index)}}
    onmouseleave = { () =>{setActiveIndex(-1)}}
    <div className="project-item">
        <h3>
            <span>{title}</span>
        </h3>
    </div>
}


Index.js
import React from 'react';
import "scss"
import sampleData from '';

export default () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="page-wrapper">
            <div className="project-list">
            sampleData.map(({title}, index ) => {
                <Title title={title} setActiveIndex={setActiveIndex} index={index}/>
            })
            </div>
            <div className="project-media">
                {sampleData.map(({mediaUrl}, index)=>{
                    const isActive = index === activeIndex;
                    return <Media url={mediaUrl} active={isActive}/>
                })}
            </div>
        </div>
    )
}

Media.js
import React from 'react';

export default ({url, active})=>{
    <img className={active && 'is-active'} src={url} alt="" />
}



