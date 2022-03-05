import { h } from 'preact';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            &copy; 2022 AccelorRC
        </footer>
    )
}