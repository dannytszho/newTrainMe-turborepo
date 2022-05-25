import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Train Me</title>
      </Head>
      {/* Hero section */}
      <section className="px-6 p-96 mx-auto bg-red-600">
        <h1>Home</h1>
        <Link href="/aware">
          <a>Awareness</a>
        </Link>
        <br />
        <Link href="/stopwatch">
          <a>Stopwatch</a>
        </Link>
      </section>
      {/* About section */}
      <section id="about" className="px-64 p-96 mx-auto bg-blue-200 text-center">
      Take Your Training to the Next Level
      <br />
      Train Me is an app for everything you can do on your own to improve as a soccer player. Whether you’re just getting started or are an elite player with pro aspirations, we’ll guide you in that process.

      </section>
    </>
    
  )
}

export default Home