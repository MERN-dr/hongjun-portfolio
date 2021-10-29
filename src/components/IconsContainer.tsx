import Icon from "./Icon";
import logos from "../content/img/logos";
import { useEffect, useMemo, useRef, useState } from "react";
import useElementOnScreen from "src/content/intersection/useElementOnScreen";

type iconsArray = {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
}

function IconsContainer() {
    const targetRef = useRef(null);
    const isvisible = useElementOnScreen({
        root: null,
        rootMargin:'0px',
        threshold: 0.3
    }, targetRef);
    
    const iconsArray: iconsArray[] = useMemo(
        () => [
            logos.C,
            logos.javascript,
            logos.typescript,
            logos.PHP,
            logos.codeIgniter,
            logos.react,
            logos.redux,
            logos.nextjs,
            logos.nodejs,
            logos.expressjs,
            logos.ubuntu,
            logos.AWSEC2,
            logos.sass,
            logos.tailwindCSS,
            logos.mongodb,
            logos.mariaDB,
            logos.postman,
            logos.git,
            logos.github,
            logos.framerMotion
    ],[]);

    return (
        <div className="iconsContanier" ref={targetRef}>
            {iconsArray.map( (icon) => (
                isvisible ? 
                <Icon className={icon.label} imageUrl={icon.logo} key={icon.label}/> : ""
            ))}
        </div>
    )
}

export default IconsContainer
