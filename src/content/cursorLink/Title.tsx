import { useEffect } from "react";

type objtype = {
    title: string,
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
    index: number
}

function Title({title, setActiveIndex, index}:objtype) {
    
    return (
        <div className="project-item" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)}>
            <h3 className="project-title">
                <span>{title}</span>
            </h3>
        </div>
    )
}

export default Title
