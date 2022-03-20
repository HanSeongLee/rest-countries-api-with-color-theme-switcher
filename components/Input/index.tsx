import React, {CSSProperties, InputHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
}

const Input: React.FC<IProps> = ({ icon, ...props }) => {
    return (
        <div className={cn(styles.inputField, {
            [styles.icon]: icon,
        })}
             style={{
                 '--icon': icon,
             } as CSSProperties}
        >
            <input className={styles.input}
                   {...props}
            />
        </div>
    );
};

export default Input;
