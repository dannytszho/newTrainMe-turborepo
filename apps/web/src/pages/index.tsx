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
      {/* Animate section */}
      <section className="font-mono h-[800px] mx-auto bg-gray-200 dark:bg-white text-center">
        <div className="mx-20 md:mx-40 py-5 md:py-10 border-white border-b-4"></div>
        <div className="mx-20 md:mx-40 py-5 md:py-10 border-white border-b-4">
          <div className="bg-clip-text text-[40px] md:text-[100px] font-bold text-transparent bg-gradient-to-l from-purple-700 via-red-500 to-yellow-200 animate-[textclip_2s_linear_infinite]">
            Train Me
          </div>
        </div>
        <div className="flex">
          <div className="md:mx-60 md:w-36 md:h-36 md:p-10 bg-white rounded-full"></div>
          <div className="text-[20px] mt-10">
            Sign up if You have a
            <div className="h-[43px] overflow-hidden inline-block whitespace-pre">
              <div className="text-purple-700 animate-[show_5s_linear_infinite]">
                {' '}
                Pro{' '}
              </div>
              <div className="text-red-600"> D1 </div>
            </div>
            mentality.
          </div>
        </div>
        <div className="mx-20 md:mx-40 py-5 md:py-10 border-white border-t-4 text-2xl" />
        <br />
      </section>
      {/* Hero section */}
      <section className="px-6 p-96 mx-auto dark:bg-black">
        <h1 className="font-notoSans">AaHome</h1>
        <h1 className="font-titilliumWeb">AaHome</h1>
        <h1 className="font-spline">AaHome</h1>
        <Link href="/aware">
          <a>Awareness</a>
        </Link>
        <br />
        <Link href="/stopwatch">
          <a>Stopwatch</a>
        </Link>
      </section>
      {/* About section */}
      <section
        id="about"
        className="px-20 md:px-64 p-96 mx-auto bg-gray-200 dark:bg-white text-center"
      >
        <div className="font-mono text-sm md:text-lg text-red-600 animate-[move_1.2s_ease-in-out_infinite]">
          Take Your Training to the Next Level!
        </div>
        <br />
        Train Me is an app for everything you can do on your own to improve as a
        soccer player. Whether you’re just getting started or are an elite
        player with pro aspirations, we’ll guide you in that process.
      </section>
    </>
  )
}

export default Home
