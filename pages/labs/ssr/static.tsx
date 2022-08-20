import { NextPage } from "next"
import { GetStaticProps } from "next"


type Props = {
  cstaticCatFact: {
    fact: string
    length: number
  }
}

const staticPage: NextPage<Props> = ({staticCatFact}) =>  (
    <section>
      <h1>Static Page</h1>
      <p>This is a static page. This gets built at run time to enable swift loading. If your page consists of static html then there is little else to think about</p>
      <h2>Static Generation with Data</h2>
      <p>However, what if we are fetching a random cat fact such as:</p>
      <blockquote>{catFact.fact}</blockquote> 
      <p>In this case we can export a function called getStaticProps from a page. This tells Next.js to pre-render this page at build time using the props returned by getStaticProps. In this page we are using getStaticProps to get a radom cat fact. This fetch is performed as part of next build, though in dev mode it will refetch each time.</p>
    <h2>Server-side Rendering </h2>
    <p>So, if you refreshed the page in dev mode, you will see the cat fact again. This is because the page is pre-rendered at build time. Server-side rendering is what need when you want to pre-render the page on each request </p>
    MAKE A LINK TO SERVER SIDE PAGE WITH MAYBE A CAT PIC TOO FOR CUTENESS
    <h2>Static Paths</h2>
    <p></p>
    <h2>Incremental Static Regeneration</h2>
    </section>
    

  )


export default staticPage

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get cat facts
  const res = await fetch("https://catfact.ninja/fact")
  const catFact = await res.json()


  // By returning { props: { catFact } }, the static component
  // will receive `cat fact` as a prop at build time
  return {
    props: {
      staticCatFact,
    },
  }
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get cat facts
  const res = await fetch("https://catfact.ninja/fact")
  const catFact = await res.json()


  // By returning { props: { catFact } }, the static component
  // will receive `cat fact` as a prop at build time
  return {
    props: {
      serverSideCatFact,
    },
  }
}

