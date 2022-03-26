import React, {useEffect, useState} from "react";
import Loader from "../../components/Loader";
import {useTheme} from "next-themes";

const ThemeLoader: React.FC = () => {
    const [color, setColor] = useState('#111517');
    const {theme} = useTheme();

    useEffect(() => {
        setColor(theme === 'light' ? '#111517' : '#FFFFFF');
    }, [theme]);

    return (
        <Loader color={color} />
    );
};

export default ThemeLoader;
