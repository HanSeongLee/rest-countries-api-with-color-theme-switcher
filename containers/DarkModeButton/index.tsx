import React, {ButtonHTMLAttributes, useCallback, useEffect, useState} from "react";
import {useTheme} from "next-themes";

const DarkModeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { theme, setTheme } = useTheme();
    const [clientTheme, setClientTheme] = useState();

    const onClick = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    useEffect(() => {
        setClientTheme(theme);
    }, [theme]);

    return (
        <button onClick={onClick}
                {...props}
        >
            <img src={clientTheme === 'light' ? '/img/icon-crescent-outline.svg' : '/img/icon-crescent.svg'}
                 alt={''}
            />
            Dark Mode
        </button>
    );
};

export default DarkModeButton;
