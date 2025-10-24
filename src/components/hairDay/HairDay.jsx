import { FaTrashCan } from "react-icons/fa6";
import "./HairDay.css"

import { useContext } from "react"
import ToggleTimeContext from "../../context/timeColor"

const HairDay = ({ id, time, name }) => {

    const altData = useContext(ToggleTimeContext)

    function getId(id_value) {
        altData.setRemove_(id_value)
    }

    return (
        <li>
            <div>
                <span className="time">{time}</span>
                <span className="name">{name}</span>
            </div>
            <FaTrashCan onClick={() => getId(id)} className="icon-delete"/>
        </li>
    )
}

export default HairDay