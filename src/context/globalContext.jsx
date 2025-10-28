import { createContext, useState } from "react"

const GlobalContext = createContext()

export default GlobalContext

export const GlobalProvider = ({ children }) => {

    const [themecolor, setThemecolor] = useState([])
    const [remove_, setRemove_] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    return (
        <GlobalContext.Provider 
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
        </GlobalContext.Provider>
    )
}