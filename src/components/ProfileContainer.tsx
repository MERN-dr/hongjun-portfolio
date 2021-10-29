import { motion } from "framer-motion"
import { porfile, profileWrapper } from "../content/framer/variants"

function ProfileContainer() {
    return (
        <motion.div className="profileWrapper" variants={profileWrapper} initial="initial" animate="animate">
            <motion.img
                variants={porfile}
                src="/assets/images/image5.png" alt="profile" className="profile" />            
        </motion.div>
    )
}

export default ProfileContainer
