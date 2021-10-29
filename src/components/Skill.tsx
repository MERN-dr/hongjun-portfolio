GiSkills
import { GiSkills } from "react-icons/gi";
import IconsContainer from "./IconsContainer";


function Skill() {
    return (
        <>
            <div id="skill"></div>
            <div className="skillWrapper">
                <div>
                    <GiSkills/>
                </div>
                <div className="skills">
                    <div className="iconWrapper">
                        <IconsContainer/>
                    </div>
                </div> 
            </div>

        </>
    )
}

export default Skill
