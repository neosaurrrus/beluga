import {NextPage} from 'next'
import Link from 'next/link'

const LabsPage: NextPage = () => (
  <section>
    <h1>Secret Labs</h1>
    <p>Sometimes I just want to run some experiments in simplified scenarios. This is my safe space, hopefully hidden away from the world. Unless they look at the repo</p>
    <ul>
      <li>
        <Link href='/labs/next-data-fetching'>
          <a>Next Data Fetching</a>
        </Link>
      </li>
    </ul>
  </section>
)

export default LabsPage
