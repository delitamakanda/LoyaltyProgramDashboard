import {useEffect, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return {
        theme,
        toggleTheme: () => setTheme(theme === 'light'? 'dark' : 'light'),
    };
}
