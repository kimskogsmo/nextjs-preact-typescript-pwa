import { h } from 'preact';

import styles from './Footer.module.scss';

export default function Footer({ companyName }) {
    return (
        <footer className={styles.footer}>
            &copy; {companyName && (companyName)}
        </footer>
    )
}