import { h } from 'preact';

import styles from './Footer.module.scss';

const cond=v=>v?v:null

export default function Footer({ companyName }) {
    return (
        <footer className={styles.footer}>
            &copy; 2022 {cond(companyName)}
        </footer>
    )
}