import {useStore} from "./store";
import shallow from "zustand/shallow";

const useCountries = () => {
    const { countries, allCountries, countriesByName, countriesByRegion } = useStore((store) => ({
        countries: store.countries,
        allCountries: store.allCountries,
        countriesByName: store.countriesByName,
        countriesByRegion: store.countriesByRegion,
    }), shallow);

    return { countries, allCountries, countriesByName, countriesByRegion };
};

export default useCountries;
