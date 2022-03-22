import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import { useCreateStore, Provider } from "../lib/store";

function MyApp({ Component, pageProps }: AppProps) {
    const createStore = useCreateStore(pageProps.initialZustandState);

    return (
        <ThemeProvider attribute={'class'}>
            <Provider createStore={createStore}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    );
};

export default MyApp
