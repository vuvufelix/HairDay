import { useContext } from "react"
import ToggleTimeContext from "../../context/timeColor"

const Error = () => {

    const altData = useContext(ToggleTimeContext)

    return <div className="message">{altData.message}</div>
}

export default Error