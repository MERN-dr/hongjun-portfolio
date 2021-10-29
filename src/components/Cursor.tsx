import React, { useState } from 'react';
import data from '../content/cursorLink/Data';
import Media from '../content/cursorLink/Media';
import Title from '../content/cursorLink/Title';

function Cursor() {
    const [activeIndex, setActiveIndex] = useState(-1);
    console.log(activeIndex);
    return (
        <>
        <div id="project"></div>
        <div className="page-wrapper">
            <div className="project-list">
                {/* {data.map(({title}, index) => {
                    return <Title title={title} setActiveIndex={setActiveIndex} index={index} key={index}/>
                })} */}
                <div className="project-item">
                    <a className="project-title" href="https://github.com/javajspproject"  target="_blank" rel="author" title="Java JSP" >
                        <span onMouseEnter={() => setActiveIndex(0)} onMouseLeave={() => setActiveIndex(-1)}>Web</span>
                    </a>
                    <a className="project-title" href="https://github.com/javajspproject"  target="_blank" rel="author" title="Java JSP" >
                        <span onMouseEnter={() => setActiveIndex(1)} onMouseLeave={() => setActiveIndex(-1)}>site</span>
                    </a>
                </div>
                <div className="project-item">
                    <a className="project-title" href="https://github.com/php-organi"  target="_blank" rel="author" title="PHP" >
                        <span onMouseEnter={() => setActiveIndex(2)} onMouseLeave={() => setActiveIndex(-1)}>Link</span>
                    </a>
                </div>
                <div className="project-item">
                    <a className="project-title" href="https://github.com/MERN-dr"  target="_blank" rel="author" title="MERN" >
                        <span onMouseEnter={() => setActiveIndex(3)} onMouseLeave={() => setActiveIndex(-1)}>Branding</span>
                    </a>
                </div>
            </div>
            <div className="project-media">
                {data.map(({mediaUrl}, index)=>{
                    const isActive = index === activeIndex;
                    return <Media url={mediaUrl} active={isActive} key={index}/>
                })}
            </div>
        </div>
        </>
    )
}

export default Cursor;
