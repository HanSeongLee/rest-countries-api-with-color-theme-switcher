import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import {BeatLoader} from "react-spinners";
import cn from "classnames";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    color?: string;
    loading?: boolean;
    size?: number;
};

const Loader: React.FC<IProps> = ({ className, color, loading, size, ...props }) => {
    return (
        <div className={cn(styles.loader, className)}
             {...props}
        >
            <BeatLoader color={color}
                        loading={loading}
                        size={size}
            />
        </div>
    );
};

Loader.defaultProps = {
    loading: true,
    size: 25,
};

export default Loader;
