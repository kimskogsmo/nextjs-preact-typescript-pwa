import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Head from 'next/head';

import styles from './Layout.module.scss';

export default function Layout({ title, metaDescription, children, authenticated, user }) {
    return (
        <>
            <Head>
                <meta name='description' content={metaDescription} />
                <title>{title}</title>
            </Head>

            <Header />

            <main className={styles.main}>
                {children}
            </main>
            
            <Footer />
        </>
    )
}