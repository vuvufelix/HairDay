import { createContext, useState } from "react"

const GlobalContext = createContext()

export default GlobalContext

export const GlobalProvider = ({ children }) => {

    const [dataLocalStorage, setDataLocalStorage] = useState([])
    const [remove_, setRemove_] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    return (
        <GlobalContext.Provider 
            value={
                {   dataLocalStorage, 
                    setDataLocalStorage, 
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