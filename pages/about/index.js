import {h, Fragment } from 'preact'
import Head from "next/head";

const About = () => (
    <Fragment>
        <Head>
            <title>Accelor // Vilka är vi?</title>
            <meta name={"description"} content={"Om accelor. Vår vision, våra värde, och vad vi strävar efter."} />
        </Head>

        <main>
            <h1>About us</h1>
        </main>
    </Fragment>
);

export default About;
