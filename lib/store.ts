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
        }[];
    }[];
};
type UseStoreState = typeof initializeStore extends (
    ...args: never
) => UseStore<infer T>
    ? T
    : never;

const initialState = {
    countries: [],
};

const zustandContext = createContext<UseStoreState>();
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
            }
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
