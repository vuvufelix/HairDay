import { FaTrashCan } from "react-icons/fa6";
import "./HairDay.css"

const HairDay = ({ id, time, name }) => {

    return (
        <li>
            <div>
                <span className="time">{time}</span>
                <span className="name">{name}</span>
            </div>
            <FaTrashCan onClick={() => id} className="icon-delete"/>
        </li>
    )
}

export default HairDay