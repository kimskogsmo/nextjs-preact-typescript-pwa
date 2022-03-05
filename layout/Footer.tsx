import { h } from 'preact';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>Hem</li>
                <li>Kontakt</li>
                <li>Case</li>
            </ul>
            
            <div className='copyRights'>
                &copy; 2022 AccelorRC
            </div>
        </footer>
    )
}