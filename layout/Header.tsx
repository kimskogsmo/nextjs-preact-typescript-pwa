import { h } from 'preact';
import Link from 'next/link'
// import Bag from '../assets/icons/bag.svg';
import styles from './Header.module.scss'

interface HeaderProps {
    title: any;
    links: any;
}

export default function Header({ title, links }: HeaderProps) {
    return (
        <header className={styles.header}>
            <Link href="/">
                <span className={styles.logo}>ekick</span>
            </Link>

            <div className={styles.icons}>
                <Link href="/account">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438-1.57 1.834-3.957 2.739-7.102 2.739-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.249 2.249 0 0 1 2.249-2.25h11.501Zm0 1.5H6.253a.749.749 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461 1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.749.749 0 0 0-.749-.75ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="#000000"/></svg>
                </Link>

                <Link href="/wishlist">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Zm6.548 6.54L12 19.485 4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48Z" fill="#000000"/></svg>
                </Link>

                <Link href="/cart">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z" fill="#000000" /></svg>
                </Link>
            </div>
        </header>
    )
}