import React, {HTMLAttributes, useEffect} from "react";
import CountryCard from "../../components/CountryCard";
import useCountries from "../../lib/useCountries";

const CountryContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { allCountries, countries } = useCountries();

    useEffect(() => {
        allCountries();
    }, []);

    return (
        <div {...props}>
            {countries?.map(({flags: {png}, name, region, capital, population}, index) => (
                <CountryCard name={name}
                             region={region}
                             capital={capital}
                             population={population}
                             flag={png}
                             key={index}
                />
            ))}
        </div>
    );
};

export default CountryContainer;
