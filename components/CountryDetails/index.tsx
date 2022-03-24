import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import Link from 'next/link';

interface IProps {
    flag: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital?: string;
    topLevelDomain: string[];
    currencies: string[];
    languages: string[];
    borderCountries: string[];
};

const CountryDetails: React.FC<IProps> = ({
                                              flag, name, nativeName, population,
                                              region, subRegion, capital, topLevelDomain,
                                              currencies, languages, borderCountries
                                          }) => {
    return (
        <div className={styles.countryDetails}>
            <img className={styles.flag}
                 src={flag}
                 alt={''}
            />

            <h2 className={styles.countryName}>
                {name}
            </h2>
            <div className={styles.groupContainer}>
                <div>
                    <CountryProperty label={'Native Name'}>
                        {nativeName}
                    </CountryProperty>
                    <CountryProperty label={'Population'}>
                        {population}
                    </CountryProperty>
                    <CountryProperty label={'Region'}>
                        {region}
                    </CountryProperty>
                    <CountryProperty label={'Sub Region'}>
                        {subRegion}
                    </CountryProperty>
                    <CountryProperty label={'Capital'}>
                        {capital}
                    </CountryProperty>
                </div>
                <div>
                    <CountryProperty label={'Top Level Domain'}>
                        {topLevelDomain?.join(', ')}
                    </CountryProperty>
                    <CountryProperty label={'Currencies'}>
                        {currencies?.join(', ')}
                    </CountryProperty>
                    <CountryProperty label={'Languages'}>
                        {languages?.join(', ')}
                    </CountryProperty>
                </div>
                <div>
                    <h3 className={styles.borderCountries}>
                        Border Countries
                    </h3>
                    <div className={styles.borderCountryContainer}>
                        {borderCountries?.map((country, index) => (
                            <Link href={`/countries/${country.toLowerCase()}`}
                                  key={index}
                            >
                                <a>
                                    <Button>
                                        {country}
                                    </Button>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

type ICountryProps = {
    label: string;
};

const CountryProperty: React.FC<ICountryProps> = ({ label, children }) => {
    return (
        <div>
            <span className={styles.label}>
                {label}:
            </span>&nbsp;
            {children}
        </div>
    )
}

export default CountryDetails;
