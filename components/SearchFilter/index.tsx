import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import SearchInput from "../../containers/SearchInput";
import RegionFilter from "../../containers/RegionFilter";

const SearchFilter: React.FC = () => {
    return (
        <div className={styles.searchFilter}>
            <Container className={styles.container}>
                <SearchInput/>

                <RegionFilter className={styles.regionFilter} />
            </Container>
        </div>
    );
};

export default SearchFilter;
