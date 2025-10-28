import { useContext } from "react"
import GlobalContext from "../../context/globalContext"

const Message = () => {

    const altData = useContext(GlobalContext)

    return <div className="message">{altData.message}</div>
}

export default Message