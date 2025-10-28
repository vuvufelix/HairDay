import { FaTrashCan } from "react-icons/fa6";
import "./HairDay.css"
import { useContext } from "react"
import GlobalContext from "../../context/globalContext"

const HairDay = ({ id, time, name }) => {

    const altData = useContext(GlobalContext)

    function getId(id_value) {
        altData.setRemove_(id_value)
        // Message
        altData.setError(true)
        altData.setMessage("Agendamento removido com sucesso!.")
        setTimeout(() => {
            altData.setError(false)
        }, 2500)
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