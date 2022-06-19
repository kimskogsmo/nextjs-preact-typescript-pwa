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
            </Head>

            <h1>ego sum home!</h1>
            <p>descr</p>

            <section class="categories">
                {/* {services.map(s => (
                    <article>
                        <h3>{s.title}!</h3>
                    
                        <Link
                            href={{
                                pathname: "services/[slug]",
                                query: {
                                    slug: s.slug,
                                    title: s.title
                                }
                            }}
                            as={`services/${s.slug}`}
                        >
                            <strong>View {s.title}!</strong>
                        </Link>
                    </article>
                ))} */}
            </section>
        </Fragment>
    )
}

export default Home;
