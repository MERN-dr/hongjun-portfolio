import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    initial:{
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

export const fadeIn = (direction: "up"|"down" = "up" ): Variants => {
    return {
        initial:{
            y: direction === "up"? 40 : -60, 
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
    
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    }
}

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.7,
        },
    },
};

export const profileWrapper: Variants = {
    initial: {
        y: -1000,
    },
    animate: {
        y: 0,
        transition: {
            delay: 2.6,
            duration: 0.8,
            type: "spring",
        },
    },
};
export const porfile: Variants = {
    initial: {},
    animate: {
        y: [30, 0, 30],
        transition: {
            duration: 1.6,
            ease: "linear",
            repeat: Infinity,
        },
    },
};

export const iconWrapper: Variants = {
    initial: {
        y: -800,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.4,
            type: "spring",
        },
    },
}

export const icon: Variants = {
    initial: {},
    animate: {
        x: [0,-10,10,0],
        transition: {
            delay: 1,
            duration: 3,
            ease: "linear",
            repeat: Infinity,
        }
    }
}