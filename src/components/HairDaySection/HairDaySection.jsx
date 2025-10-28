import { FaCloudMoon } from "react-icons/fa6"
import HairDay from "../hairDay/HairDay"
import { FaCloudSun } from "react-icons/fa6";
import { FaStarAndCrescent } from "react-icons/fa6";

const HairDaySection = ({periodo, start_end, array_value, array_state}) => {
    return (
        <div className="sections">
            <div className="section-data">
                <div>

                    {array_state === "Manhã" ? 
                        <FaCloudMoon className="iconTime"/>
                        : 
                        array_state === "Tarde" ? 
                        <FaCloudSun className="iconTime"/>
                        : 
                        <FaStarAndCrescent className="iconTime"/>
                    }

                    <span>{periodo}</span>
                </div>
                <span>{start_end}</span>
            </div>
            <ul>
                {
                    array_value.map((agend) =>  
                        <HairDay 
                            key={agend.id} 
                            time={agend.hora} 
                            name={agend.nome} 
                            id={agend.id}
                        />
                    ) 
                }
            </ul>
        </div>
    )
}

export default HairDaySection