import React, {HTMLAttributes, useEffect} from "react";
import CountryCard from "../../components/CountryCard";
import useCountries from "../../lib/useCountries";
import Link from 'next/link';
import ThemeLoader from "../ThemeLoader";
import {AutoSizer, List} from 'react-virtualized';

const ITEM_SIZE = 228;

const CountryContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { allCountries, countries } = useCountries();

    useEffect(() => {
        allCountries();
    }, []);

    return (
        <div {...props}>
            {countries.length > 0 ? (
                <AutoSizer>
                    {({width}) => {
                        const itemsPerRow = Math.floor(width / ITEM_SIZE);
                        const rowCount = Math.ceil(countries.length / itemsPerRow);

                        return (
                            <List width={width}
                                  height={750}
                                  rowCount={rowCount}
                                  rowHeight={336 + 74}
                                  rowRenderer={({
                                                    index, key, style
                                                }) => {
                                      const items = [];
                                      const fromIndex = index * itemsPerRow;
                                      const toIndex = Math.min(fromIndex + itemsPerRow, countries.length);

                                      for (let i = fromIndex; i < toIndex; i++) {
                                          const {
                                              name, region, capital, population,
                                              flags: {svg}
                                          } = countries[i];

                                          items.push(
                                              <Link href={`/countries/${String(name).toLowerCase()}`}
                                                    key={i}
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
                                          );
                                      }

                                      return (
                                          <div key={key}
                                               style={{
                                                   ...style,
                                                   display: 'flex',
                                                   alignItems: 'center',
                                                   justifyContent: 'center',
                                                   flexWrap: 'wrap',
                                                   gridGap: '74px',
                                                   background: 'var(--theme-background)',
                                               }}
                                          >
                                              {items}
                                          </div>
                                      )
                                  }}
                            />
                        )
                    }}
                </AutoSizer>
            ) : (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    minHeight: '600px',
                }}>
                    <ThemeLoader/>
                </div>
            )}
        </div>
    );
};

export default CountryContainer;
