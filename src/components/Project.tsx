import { useState } from "react";
import data from '../content/cursorLink/Data';
import Media from '../content/cursorLink/Media';

function Project() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <>
            <div id="project"></div>
            <div className="project">
                <div className="links">
                    <div className="link-item">
                        <a href="https://github.com/javajspproject"  target="_blank" rel="author" title="Java JSP" >
                            <span onMouseEnter={() => setActiveIndex(0)} onMouseLeave={() => setActiveIndex(-1)}>Web</span>
                        </a>
                        <a href="https://github.com/javajspproject"  target="_blank" rel="author" title="Java JSP" >
                            <span onMouseEnter={() => setActiveIndex(1)} onMouseLeave={() => setActiveIndex(-1)}>site</span>
                        </a>
                    </div>
                    <div className="link-item">
                        <a href="https://github.com/php-organi"  target="_blank" rel="author" title="PHP" >
                            <span onMouseEnter={() => setActiveIndex(2)} onMouseLeave={() => setActiveIndex(-1)}>Link</span>
                        </a>
                    </div>
                    <div  className="link-item">
                        <a href="https://github.com/MERN-dr"  target="_blank" rel="author" title="MERN" >
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

export default Project
