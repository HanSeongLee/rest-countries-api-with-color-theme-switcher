import React from "react";
import styles from './style.module.scss';

type IProps = {
    name: string;
    capital?: string;
    region: string;
    population: number;
    flag: string;
};

const CountryCard: React.FC<IProps> = ({
                                           name, capital, region, population
                                           , flag
                                       }) => {
    return (
        <div className={styles.countryCard}>
            <div className={styles.header}>
                <img className={styles.headerImage}
                     src={flag}
                     alt={''}
                />
            </div>
            <div className={styles.body}>
                <h2 className={styles.countryName}>
                    {name}
                </h2>
                <div className={styles.countryPropertyContainer}>
                    <div>
                        <span className={styles.countryHeader}>
                            Population:&nbsp;
                        </span>
                        {population.toLocaleString()}
                    </div>
                    <div>
                        <span className={styles.countryHeader}>
                            Region:&nbsp;
                        </span>
                        {region}
                    </div>
                    <div>
                        <span className={styles.countryHeader}>
                            Capital:&nbsp;
                        </span>
                        {capital}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
