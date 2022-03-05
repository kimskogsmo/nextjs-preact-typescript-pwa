/* core */
import axios from 'axios';
import { h } from 'preact'

/* next */
import Link from 'next/link'

/* api */
import api, { fetchQuery, routes } from './../../api'
import token from './../../config/token';

/* components */
import Hero from '@features/hero';

function Home({
    data,
    meta
}) {
    

    return (
        <>
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
        </>
    )
}

export async function getStaticProps(ctx) {
    const { data, meta } = await fetch('http://localhost:1337/api/articles').then(res => res.status == 200 ? res.json() : null).then(data => data)
    
    console.log(data, meta);
    return {
        props: {
            data, meta
        }
    }
}

// export async function getServerSideProps() {
//     // const services = await fetchQuery(routes.getServices)
//     // const articles = await fetchQuery(routes.getArticles)

//     // console.log(services, articles);

//     return {
//         props: {
//             services,
//             articles
//         }
//     }
// }


export default Home;
