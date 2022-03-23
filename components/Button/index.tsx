import React, {ButtonHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: 'primary' | 'back';
}

const Button: React.FC<IProps> = ({ variants, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants === 'primary',
            [styles.back]: variants === 'back',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
