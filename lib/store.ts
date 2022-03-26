import create, {UseStore} from "zustand";
import axios from "axios";
import createContext from "zustand/context";
import {combine} from "zustand/middleware";
import {useLayoutEffect} from "react";

let store: any;

type InitialState = {
    countries: {
        name: string;
        capital?: string;
        region: string;
        population: number;
        flags: {
            svg: string;
            png: string;
        };
    }[];
    country: {
        name: string;
        nativeName: string;
        capital?: string;
        region: string;
        subRegion: string;
        population: number;
        flags: {
            svg: string;
            png: string;
        };
        topLevelDomain: string[];
        currencies: string[];
        languages: string[];
        borderCountries: string[];
    };
    isoCode: {};
    allCountries: () => void;
    countriesByName: (name: string) => void;
    countriesByRegion: (region: string) => void;
    countryDetailsByName: (name: string) => void;
};

const initialState = {
    countries: [],
    country: null,
    isoCode: {},
};

const zustandContext = createContext<InitialState>();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

function initializeStore(preloadedState = {}) {
    return create(
        combine({ ...initialState, ...preloadedState, }, (set, get) => ({
            allCountries: async () => {
                try {
                    const {data} = await axios.get('https://restcountries.com/v2/all?fields=flags,name,population,region,capital');

                    set({
                        countries: data,
                    });
                } catch (e) {
                    set({
                        countries: [],
                    });
                }
            },
            countriesByName: async (name: string) => {
                try {
                    const {data} = await axios.get(`https://restcountries.com/v2/name/${name}?fields=flags,name,population,region,capital`);

                    set({
                        countries: data,
                    });
                } catch (e) {
                    set({
                        countries: [],
                    });
                }
            },
            countriesByRegion: async (region: string) => {
                try {
                    const {data} = await axios.get(`https://restcountries.com/v2/region/${region}?fields=flags,name,population,region,capital`);

                    set({
                        countries: data,
                    });
                } catch (e) {
                    set({
                        countries: [],
                    });
                }
            },
            countryDetailsByName: async (name: string) => {
                try {
                    const {data: countryData} = await axios.get(`https://restcountries.com/v2/name/${name}?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`);
                    const country = countryData.filter(({name: countryName}: {name: string}) => countryName.toLowerCase() === name)[0];
                    if (country?.borders?.length > 0) {
                        const codes = country?.borders?.join(',');
                        const {data: CodeNameData} = await axios.get(`https://restcountries.com/v2/alpha?codes=${codes}&fields=name`);

                        set({
                            country: {
                                ...country,
                                currencies: country.currencies.map(({name}: {name: string}) => name),
                                languages: country.languages.map(({name}: {name: string}) => name),
                                borderCountries: CodeNameData.map(({name}: {name: string}) => name),
                            },
                        });
                        return;
                    }

                    set({
                        country: {
                            ...country,
                            currencies: country.currencies.map(({name}: {name: string}) => name),
                            languages: country.languages.map(({name}: {name: string}) => name),
                            borderCountries: [],
                        },
                    });
                } catch (e) {
                    console.log(e)
                    set({
                        country: null,
                    });
                }
            },
        }))
    );
};

export const useCreateStore = (initialState: InitialState) => {
    if (typeof window === 'undefined') {
        return () => initializeStore(initialState);
    }

    store = store ?? initializeStore(initialState);

    useLayoutEffect(() => {
        if (initialState && store) {
            store.setState({
                ...store.getState(),
                ...initialState,
            });
        }
    }, [initialState]);

    return () => store;
};
