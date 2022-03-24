import {useStore} from "./store";
import shallow from "zustand/shallow";

const useCountries = () => {
    const {
        countries, country, allCountries, countriesByName,
        countriesByRegion, countryDetailsByName
    } = useStore((store) => ({
        countries: store.countries,
        country: store.country,
        allCountries: store.allCountries,
        countriesByName: store.countriesByName,
        countriesByRegion: store.countriesByRegion,
        countryDetailsByName: store.countryDetailsByName,
    }), shallow);

    return {
        countries, country, allCountries, countriesByName,
        countriesByRegion, countryDetailsByName
    };
};

export default useCountries;
