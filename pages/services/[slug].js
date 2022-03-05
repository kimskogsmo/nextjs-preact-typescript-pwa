import React from 'react'

const Product = ({title}) => (
  <main>
        <h1>{title && (title)}</h1>
  </main>
);

export async function getServerSideProps (context) {
    console.log(context.query) 
    // returns { id: episode.itunes.episode, title: episode.title}
    

    //you can make DB queries using the data in context.query
    return {
        props: { 
           title: context.query.title || null //pass it to the page props
        }
    }
}

export default Product;