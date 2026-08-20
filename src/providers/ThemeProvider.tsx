'use client'

import { createContext, ReactNode, useEffect, useState } from "react";


interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)




const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<"dark" | "light">("light")

    useEffect(() => {


        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            document.documentElement.classList
                .remove("light")
        }
    }, [])


    const toggleTheme = () => {

        setTheme((currentTheme) => {
            const newTheme = currentTheme === "light" ? "dark" : "light";

            if (newTheme === 'dark') {
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", 'dark')
            } else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", 'light')
            }

            return newTheme
        })

    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;