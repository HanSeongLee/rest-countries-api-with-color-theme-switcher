import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

type IProps = {
    placeholder?: string;
    options?: {label: string, value: string}[];
    value?: string;
    open: boolean;
    onClick: () => void;
    onChange: (value: string) => void;
}

const Select: React.FC<IProps> = ({
                                      placeholder, value, options, open,
                                      onClick, onChange
                                  }) => {
    return (
        <div className={cn(styles.select, {
            [styles.open]: open,
        })}
             onClick={onClick}
        >
            <div className={styles.selectBox}>
                {options?.filter(({value:optionValue}) => optionValue === value)[0]?.label
                || placeholder}
            </div>
            <div className={styles.listWrapper}>
                <ul className={styles.list}>
                    {options?.map(({ label, value }, index) => (
                        <li className={styles.item}
                            onClick={_ => {
                                if (onChange) {
                                    onChange(value);
                                }
                            }}
                            key={index}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Select;
