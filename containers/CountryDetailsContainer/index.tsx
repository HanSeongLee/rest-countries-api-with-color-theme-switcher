import React, {HTMLAttributes, useEffect} from "react";
import CountryDetails from "../../components/CountryDetails";
import useCountries from "../../lib/useCountries";
import ThemeLoader from "../ThemeLoader";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    countryName: string;
};

const CountryDetailsContainer: React.FC<IProps> = ({ countryName, ...props }) => {
    const { country, countryDetailsByName } = useCountries();

    useEffect(() => {
        if(!countryName || countryName === 'undefined') {
            return;
        }
        countryDetailsByName(countryName);
    }, [countryName]);

    return (
        <div {...props}>
            {country ? (
                <CountryDetails flag={country?.flags.svg}
                                name={country?.name}
                                nativeName={country?.nativeName}
                                population={country?.population}
                                region={country?.region}
                                subRegion={country?.subRegion}
                                capital={country?.capital}
                                topLevelDomain={country.topLevelDomain}
                                currencies={country?.currencies}
                                languages={country?.languages}
                                borderCountries={country?.borderCountries}
                />
            ) : (
                <ThemeLoader />
            )}
        </div>
    );
};

export default CountryDetailsContainer;
