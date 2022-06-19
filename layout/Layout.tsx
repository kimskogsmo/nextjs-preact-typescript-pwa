import { h, Fragment } from 'preact';

import Header from './Header';
import Footer from './Footer';

import Head from 'next/head';

import styles from './Layout.module.scss';

export default function Layout({ title, metaDescription, children, authenticated, user }) {
    return (
        <Fragment>
            <Head>
                <meta name='description' content={metaDescription} />
                <title>{title}</title>
            </Head>

            <Header title={"accelor"} />

            <main className={styles.main}>
                {children}
            </main>

            <Footer companyName={"accelor"}/>
        </Fragment>
    )
}