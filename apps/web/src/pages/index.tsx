import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Train Me</title>
      </Head>
      <div className="h-screen">
        <h1>Home</h1>
        <Link href="/aware">
          <a>Awareness</a>
        </Link>
        <br />
        <Link href="/stopwatch">
          <a>Stopwatch</a>
        </Link>
      </div>
    </div>
  )
}

export default Home