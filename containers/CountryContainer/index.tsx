import React, {HTMLAttributes, useEffect} from "react";
import CountryCard from "../../components/CountryCard";
import useCountries from "../../lib/useCountries";
import Link from 'next/link';

const CountryContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { allCountries, countries } = useCountries();

    useEffect(() => {
        allCountries();
    }, []);

    return (
        <div {...props}>
            {countries?.map(({flags: {svg}, name, region, capital, population}, index) => (
                <Link href={`/countries/${String(name).toLowerCase()}`}
                      key={index}
                >
                    <a>
                        <CountryCard name={name}
                                     region={region}
                                     capital={capital}
                                     population={population}
                                     flag={svg}

                        />
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default CountryContainer;
