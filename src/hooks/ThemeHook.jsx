import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const useToggleTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}

export default useToggleTheme;