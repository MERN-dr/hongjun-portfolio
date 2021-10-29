import { useEffect, useMemo, useState } from "react";

type ObjType = {
    [index: string]: number| Element | null | string | ReadonlyArray<number>,
}

function useElementOnScreen(options:ObjType, targetRef:React.RefObject<any>) {
        const [isVisible, setIsvisible] = useState(false);

    const callbackFunction: IntersectionObserverCallback = entries => {
        const [entry] = entries; // const entry = entries[0];
        setIsvisible(entry.isIntersecting);
    }
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current; 
        if(currentTarget) observer.observe(currentTarget);
        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, optionsMemo]);

    return isVisible;
}

export default useElementOnScreen
