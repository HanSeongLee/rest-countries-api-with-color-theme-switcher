import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import DarkModeButton from "../../containers/DarkModeButton";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1 className={styles.title}>
                    Where in the world?
                </h1>

                <DarkModeButton className={styles.darkModeButton} />
            </Container>
        </header>
    );
};

export default Header;
