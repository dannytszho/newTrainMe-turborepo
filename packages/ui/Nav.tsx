import Link from 'next/link'
import NavButton from './buttons/NavButton'
import ThemeButton from './buttons/ThemeButton'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <ul className="m-4 flex items-center space-x-5">
        <Link href="/">Train Me</Link>
        <li className="text-gray-300 hidden md:inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
			  </li>
        <div className="item-center hidden space-x-5 md:inline-flex">
          <Link href="#about">
            <h3 className="cursor-pointer p-1">About</h3>
          </Link>
        <li className="text-gray-300 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
            <NavButton description="Stopwatch" href="/stopwatch" />
            <li className="text-gray-300 pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
          <SignedIn>
            <NavButton description="Awareness" href="/aware" />
            <li className="text-gray-300 pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <NavButton description="Players" href="/players" />
          </SignedIn>
        </div>
      </ul>
      <div className="flex items-center space-x-5">
        <SignedOut>
          <Link href="/sign-in">
            <h3 className="cursor-pointer hover:underline">Sign in</h3>
          </Link>
          <div className="cursor-pointer rounded-full border border-blue-400 px-4 py-1">
            <Link href="/sign-up">
              <h3>Get Started</h3>
            </Link>
          </div>
        </SignedOut>
        <ThemeButton />
        <UserButton />
      </div>
    </header>
  )
}

export default Nav