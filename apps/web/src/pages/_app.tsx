import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'ui/Layout'

function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <div className="h-screen transition duration-700 dark:bg-black dark:text-white">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}

export default MyApp