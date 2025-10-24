import { FaTrashCan } from "react-icons/fa6";
import "./HairDay.css"

import { useContext } from "react"
import ToggleTimeContext from "../../context/timeColor"

import Toastify from 'toastify-js'

function message(texto, cor) {
    Toastify({
        text: texto,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left", 
        stopOnFocus: true,
        style: {
          background: cor,
          padding: "0.6rem"
        }
    }).showToast();
}


const HairDay = ({ id, time, name }) => {

    const altData = useContext(ToggleTimeContext)

    function getId(id_value) {
        altData.setRemove_(id_value)
        message("Agendamento removido!", "greenyellow")
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