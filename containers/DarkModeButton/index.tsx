import React, {ButtonHTMLAttributes, useCallback, useEffect, useState} from "react";
import {useTheme} from "next-themes";

const DarkModeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    let src;

    const onClick = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    switch (resolvedTheme) {
        case 'dark':
            src = '/img/icon-crescent.svg';
            break;
        default:
            src = '/img/icon-crescent-outline.svg';
            break;
    }

    return (
        <button onClick={onClick}
                {...props}
        >
            <img src={src}
                 alt={''}
            />
            Dark Mode
        </button>
    );
};

export default DarkModeButton;
