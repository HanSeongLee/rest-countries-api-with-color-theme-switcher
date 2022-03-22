import React, {HTMLAttributes, useCallback, useState} from "react";
import Select from "../../components/Select";
import useCountries from "../../lib/useCountries";

const RegionFilter: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { allCountries, countriesByRegion } = useCountries();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();

    const onSelectClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onChange = useCallback((value) => {
        setValue(value);

        if (value === 'all') {
            allCountries();
            return ;
        }
        countriesByRegion(value);
    }, [])

    return (
        <div {...props}>
            <Select placeholder={'Filter by Region'}
                    open={open}
                    options={[
                        {
                            label: 'All',
                            value: 'all',
                        },
                        {
                            label: 'Africa',
                            value: 'africa',
                        },
                        {
                            label: 'America',
                            value: 'america',
                        },
                        {
                            label: 'Asia',
                            value: 'asia',
                        },
                        {
                            label: 'Europe',
                            value: 'europe',
                        },
                        {
                            label: 'Oceania',
                            value: 'oceania',
                        },
                    ]}
                    value={value}
                    onClick={onSelectClick}
                    onChange={onChange}
            />
        </div>
    );
};

export default RegionFilter;
