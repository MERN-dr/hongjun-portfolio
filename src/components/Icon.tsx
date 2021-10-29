import { motion } from "framer-motion";
import { icon, iconWrapper } from "src/content/framer/variants";

type classType = {
    className:string;
    imageUrl:string;
}
function Icon({className, imageUrl}:classType) {
    return (
        <div className="iconBox">
            <span className={className}>
                {className}
            </span>
            <motion.div variants={iconWrapper} initial="initial" animate="animate" >
                <motion.img 
                    whileHover={{ scale: 2.2 }}
                    whileTap={{ scale: 0.8 }}
                    variants={icon}
                    className="icon" src={imageUrl} alt="icon" />
            </motion.div>
        </div>
    )
}

export default Icon;