import {NextPage} from 'next'
import {GetServerSideProps} from 'next'
import Link from 'next/link'

type Props = {
  ssrCatFact: {
    fact: string
    length: number
  }
}

const ssrPage: NextPage<Props> = ({ssrCatFact}) => (
  <section>
    <h1>SSR Page</h1>
    <p>This is a server-side rendered page. </p>
    <p>If  we are fetching a random cat fact such as:</p>
    <blockquote>{ssrCatFact.fact}</blockquote>
    <p>We will discover that the fact refreshes on each load. Which does not happen with pure static pages.</p>
    <Link href='/labs/next-data-fetching'>
      <a>Back to Data fetching page</a>
    </Link>
  </section>
)

export default ssrPage

export const getStaticProps: GetServerSideProps = async () => {
  // Call an external API endpoint to get cat facts
  const res = await fetch('https://catfact.ninja/fact')
  const ssrCatFact = await res.json()
  // By returning { props: { catFact } }, the static component
  // will receive `cat fact` as a prop at build time
  return {
    props: {
      ssrCatFact,
    },
  }
}
