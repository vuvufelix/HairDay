import { createContext, useState } from "react"

const ToggleTimeContext = createContext()

export default ToggleTimeContext

export const ToggleTimeProvider = ({ children }) => {

    const [themecolor, setThemecolor] = useState([])
    const [remove_, setRemove_] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    return (
        <ToggleTimeContext.Provider 
            value={
                {   themecolor, 
                    setThemecolor, 
                    remove_, 
                    setRemove_, 
                    toggle, 
                    setToggle, 
                    error, 
                    setError, 
                    message, 
                    setMessage
                }
            }
        >
            {children}
        </ToggleTimeContext.Provider>
    )
}