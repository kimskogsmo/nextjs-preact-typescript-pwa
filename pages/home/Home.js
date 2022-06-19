/* core */
import { h, Fragment } from 'preact';

/* next */
import Link from 'next/link'
import Head from 'next/head'

/* components */
import Hero from '@features/hero';

function Home() {

    return (
        <Fragment>
            <Head>
                <title>Accelor // En modern byrå</title>
                <meta name={"description"} content={"Vi skapar digitala applikationer som levererar. Serverless, headless och skalbart."} />
            </Head>

            <h1>En modern digital byrå startar Q4 2022.</h1>
            <p>Vi gör serverless, headless och skalbart. Kika tillbaka snart!</p>
        </Fragment>
    )
}

export default Home;
