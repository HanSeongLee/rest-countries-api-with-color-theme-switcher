import React, {ButtonHTMLAttributes, useCallback} from "react";
import {useTheme} from "next-themes";

const DarkModeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { theme, setTheme } = useTheme();

    const onClick = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    return (
        <button onClick={onClick}
                {...props}
        >
            <img src={theme === 'light' ? '/img/icon-crescent-outline.svg' : '/img/icon-crescent.svg'}
                 alt={''}
            />
            Dark Mode
        </button>
    );
};

export default DarkModeButton;
