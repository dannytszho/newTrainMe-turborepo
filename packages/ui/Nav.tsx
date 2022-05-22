import Link from 'next/link'
import NavButton from './buttons/NavButton'
import ThemeButton from './buttons/ThemeButton'
import { SignedOut, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="m-4 flex items-center space-x-5">
        <Link href="/">Train Me</Link>
        <div className="item-center hidden space-x-5 md:inline-flex">
          <Link href="/about">
            <h3 className="cursor-pointer p-1">About</h3>
          </Link>
          <NavButton description="Awareness" href="/aware" />
          <NavButton description="Stopwatch" href="/stopwatch" />
          <NavButton description="Players" href="/players" />
        </div>
      </div>
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