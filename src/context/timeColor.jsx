import { createContext, useState } from "react"

const ToggleTimeContext = createContext()

export default ToggleTimeContext

export const ToggleTimeProvider = ({ children }) => {

    const [themecolor, setThemecolor] = useState([])
    const [remove_, setRemove_] = useState(null)
    const [toggle, setToggle] = useState(false)

    return (
        <ToggleTimeContext.Provider value={{themecolor, setThemecolor, remove_, setRemove_, toggle, setToggle}}>
            {children}
        </ToggleTimeContext.Provider>
    )
}