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
      <section id="about" className="px-20 md:px-64 p-96 mx-auto bg-blue-200 text-center">
        <p className='text-sm md:text-lg'>Take Your Training to the Next Level!</p>
        <br />
        Train Me is an app for everything you can do on your own to improve as a soccer player.    Whether you’re just getting started or are an elite player with pro aspirations, we’ll guide you in that process.
      </section>
      {/* Animate section */}
      <section className="h-[500px] mx-auto bg-red-200 text-center">
        <div className='mx-40 py-5 border-white border-b-4'></div>
        <div className='mx-40 py-10 border-white border-b-4'><div className='bg-clip-text text-[100px] font-bold text-transparent bg-gradient-to-l from-purple-700 via-red-500 to-yellow-200 animate-[textclip_2s_linear_infinite]'>Train Me</div></div>
        <div className='flex'>
          <div className='mx-60 w-36 h-36 p-10 bg-white rounded-full'></div>
          <div className='text-[40px]'>
            If You have a 
            <div className='h-[50px] overflow-hidden inline-block whitespace-pre'>
              <div className='animate-[show_5s_linear_infinite]'> Pro </div>
              <div> D1 </div>
            </div>
            mentality.</div>
        </div>
        <div className='mx-40 py-10 border-white border-t-4 text-2xl' />
        <br />

      </section>
    </>
    
  )
}

export default Home