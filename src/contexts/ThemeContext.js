import React, {createContext, useState} from "react";

export const ThemeContext = createContext();
const THEME = {
    light: {
        primary: "#0d9eef",
        primary2: "#6a9bd8",
        primaryDark: "#0167af",
        text: "#444",
        textSecondary: "#61677C",
        red: "#ff1900",
        gray: "#9798a0",
        green: "#29cd67",
        lightGreen: "#3cf300",
        yellow: "#fff40f"
    },
    dark: {
        text: "#fff",
        textSecondary: "#fff",
        red: "#0000FF"
    }
};

export function ThemeProvider(props) {
    const [theme, setTheme] = useState({isDark: false, colors: THEME.light});
    const toggleTheme = () => {
        setTheme(theme.isDark ? {
            isDark: false,
            colors: THEME.light
        } : {
            isDark: true,
            colors: THEME.dark
        });
    };
    
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}