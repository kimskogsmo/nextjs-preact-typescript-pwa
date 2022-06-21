/* core */
import { h, Fragment } from 'preact';

/* next */
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

/* components */
import Hero from '@features/hero';

function Home() {
    return (
        <Fragment>
            <Head>
                <title>NextJS/Preact/TypeScript/PWA boilerplate</title>
                <meta name={"description"} content={"Yet another preact boilerplate."} />
            </Head>

            <h1>En modern digital byrå startar Q4 2022.</h1>
            <p>Vi gör serverless, headless och skalbart. Kika tillbaka snart!</p>
        </Fragment>
    )
}

export default Home;
