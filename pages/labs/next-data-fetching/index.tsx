import {NextPage} from 'next'
import {GetStaticProps} from 'next'
import Link from 'next/link'

type Props = {
  staticCatFact: {
    fact: string
    length: number
  }
}

const NextDataFetchingPage: NextPage<Props> = ({staticCatFact}) => (
  <section>
    <h1>Next JS Data Fetching</h1>
    <p>This is a static page. This gets built at run time to enable swift loading. If your page consists of static html then there is little else to think about. It is how the web was way back when.</p>
    <h2>Static Generation with Data</h2>
    <p>However, what if we are fetching a random cat fact from an API such as:</p>
    <blockquote>{staticCatFact.fact}</blockquote>
    <p>In this case we can export a function called getStaticProps from a page. This tells Next.js to pre-render this page at build time using the props returned by getStaticProps.
      In this page we are using getStaticProps to get a radom cat fact. This fetch is performed as part of next build, though in dev mode it will refetch each time.</p>
    <h2>Server-side Rendering </h2>
    <p>Server-side rendering is what need when you want to pre-render the page on each request. Instead of the page being static at build time, the page is created upon request but by the server.
     So the server handles the api call, works out what the resulting HTML should be and sends that back to the user. Not as snappy as static pages but still faster than pure client-side.
    Note that since the page does not exist till the server makes it, it cannot be cached by a CDN. Want to see a {' '}
    <Link href='/labs/next-data-fetching/ssr'>
      <a>SSR page example?</a>
    </Link></p>
    <h2>Static Dynamic Routing</h2>
    <p>Pages are are pre-rendered at build time but what if we are using NextJs dynamic routing to, say, display a page based on a post Id? At build time you can specific the need to prerender based on data provided using getStaticPaths.
    this works in a similar way to getStaticProps.</p>
    <p>For example, if we have a page called /next-data-fetching/:id, we can pre-render this page at build time using the data provided by getStaticPaths. Oh look, we do...
      <Link href='/labs/next-data-fetching/4'>
        <a>Post 4</a>
      </Link>{' '}
      <Link href='/labs/next-data-fetching/2'>
        <a>Post 2</a>
      </Link>{' '}
      <Link href='/labs/next-data-fetching/3'>
        <a>Post 3</a>
      </Link>{' '}
    </p>
    <p>Why post 4, well thats a weird glitch where Next wants to hold onto that value but thats something to look into more another point in time</p>
    <h2>Incremental Static Regeneration</h2>
    <p>Big title for a simple idea. We can make a page rebuild without forcing every page to rebuild. There are two main ways of doing this</p>
    <ul>
      <li> Adding a revalidate prop to the returned getStaticProps that specifies in seconds how long to keep a version</li>
      <li> Using On-demand Revalidation which allows access to a manual revalidate trigger. This requires some set up so I would refer to the{' '}
        <Link href='https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration'>
          <a>Next JS Docs</a>
        </Link>{' '} for more information.
      </li>
    </ul>
  </section>
)

export default NextDataFetchingPage

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get cat facts
  const res = await fetch('https://catfact.ninja/fact')
  const staticCatFact = await res.json()
  // By returning { props: { catFact } }, the static component
  // will receive `cat fact` as a prop at build time
  return {
    props: {
      staticCatFact,
    },
  }
}
