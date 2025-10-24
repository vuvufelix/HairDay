import { createContext, useState } from "react"

const ToggleTimeContext = createContext()

export const ToggleTimeProvider = ({ children }) => {

    const [themecolor, setThemecolor] = useState({
        color: "yellow",
        border: "1px solid yellow",
        backgroundColor: "#000"
    })

    return (
        <ToggleTimeContext.Provider value={{themecolor, setThemecolor}}>
            {children}
        </ToggleTimeContext.Provider>
    )
}