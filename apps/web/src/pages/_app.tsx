import '../styles/globals.css'
//import type { AppProps } from 'next/app'
import Layout from 'ui/Layout'
import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import { useRouter } from 'next/router'

const publicPages: any = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]']

function MyApp({ Component, pageProps }: any) {
  const { pathname } = useRouter()
  const isPublicPage = publicPages.includes(pathname)

  return (
    <div className="h-screen transition duration-700 dark:bg-black dark:text-white">
    <ClerkProvider>
        {isPublicPage ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <>
            <SignedIn>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </div>
  )
}

export default MyApp