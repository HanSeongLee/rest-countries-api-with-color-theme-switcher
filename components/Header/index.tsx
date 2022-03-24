import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import DarkModeButton from "../../containers/DarkModeButton";
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href={'/'}>
                    <a>
                        <h1 className={styles.title}>
                            Where in the world?
                        </h1>
                    </a>
                </Link>

                <DarkModeButton className={styles.darkModeButton}/>
            </Container>
        </header>
    );
};

export default Header;
