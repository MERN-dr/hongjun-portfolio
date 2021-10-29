import { useEffect, useState } from "react"

import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
function ScrollToTop() {
    const [showScroll, setShowScroll] = useState<boolean>(false);
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: "smooth"});
    };
    const isTop = () =>{
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true);
        }else if(showScroll && window.pageYOffset <= 400){
            setShowScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", isTop);
    },[scrollToTop]);
    return (
        <>
            <button className="scrollToTop"
                style={{
                    position: "fixed",
                    right: "3rem",
                    bottom: "3rem",
                    display: showScroll ? "block" : "none",
                    height: 45,
                    width: 45,
                    borderRadius: 8,
                    cursor: "pointer",
                    zIndex: 1,
                    transition: "all 500ms ease-out"
                }}
                onClick={scrollToTop}
            >
                {/* <span style={{ fontWeight: "bold", fontSize: 18 }}>^</span> */}
                    <AiOutlineVerticalAlignTop/>
            </button>
        </>
    )
}

export default ScrollToTop
