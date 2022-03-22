import React, {useCallback} from "react";
import Input from "../../components/Input";
import {debounce} from 'lodash';
import useCountries from "../../lib/useCountries";

const SearchInput: React.FC = () => {
    const { allCountries, countriesByName } = useCountries();

    const delayedSearch = debounce((value: string) => {
        if (value === '') {
            allCountries();
            return ;
        }
        countriesByName(value);
    }, 500);

    const onChange = useCallback((e) => {
        delayedSearch(e.target.value);
    }, []);

    return (
        <Input type={'text'}
               placeholder={'Search for a country...'}
               icon={'var(--theme-input-search-icon)'}
               onChange={onChange}
        />
    );
};

export default SearchInput;
