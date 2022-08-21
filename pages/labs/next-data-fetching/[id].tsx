import {NextPage} from 'next'

import Link from 'next/link'

type Props = {
  post: {
    id: string,
    title: string,
  }
}

type StaticProps = {
  params: {
    id: string,
  }
}

const StaticWithDynamicRouting: NextPage<Props> = ({post}) => (
  <section>
    <h1>Static with Dynamic Routing</h1>
    <p>This is a static page that uses dynamic routing. With the relaxant post title below: </p>
    <blockquote>{post.title}</blockquote>
    <p>This is a fairly hacky version but gets the point across</p>
    <Link href='/labs/next-data-fetching'>
      <a>Back to Data fetching page</a>
    </Link>
  </section>
)

export default StaticWithDynamicRouting

const posts = [{id: '4', title: 'Hello, this is post 4'}, {id: '2', title: 'Hey, this is post 2'}, {id: '3', title: 'Hey this is post 3'}] // Assume this is fetched data from an API

export async function getStaticProps ({params}: StaticProps) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const post = posts.find(p => p.id === params.id)

  // Pass post data to the page via props
  return {props: {post}}
}


export async function getStaticPaths () {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {id: post.id},
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false}
}
