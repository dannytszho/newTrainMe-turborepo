import Link from 'next/link'
import NavButton from './buttons/NavButton'
import ThemeButton from './buttons/ThemeButton'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useTheme from './hooks/useTheme'
import Divider from 'ui/public/svg/Divider'
import RightMenu from './RightMenu'
import Image from 'next/image'
import Logo from './public/soccerLogo.gif'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [setTheme, colorTheme] = useTheme()

  const handleOpen = () => {
    setIsMenuOpen(true)
    const bodyElement = document.getElementsByTagName('body')?.[0]
    console.log(bodyElement)
    console.log('////////////////////')

    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'
    }
  }

  const handleClose = () => {
    setIsMenuOpen(false)
    const bodyElement = document.getElementsByTagName('body')?.[0]
    console.log(bodyElement)
    if (bodyElement) {
      bodyElement.style.overflow = 'auto'
    }
  }

  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <ul className="m-4 flex items-center space-x-5">
        <Link href="/">
          <a>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </a>
        </Link>
        <Link href="/">Train me</Link>
        <li className="text-gray-300 hidden md:inline-flex">
          <Divider />
        </li>
        <div className="item-center hidden space-x-5 md:inline-flex">
          <Link href="#about">
            <h3 className="cursor-pointer p-1">About</h3>
          </Link>
          <li className="text-gray-300 pt-2">
            <Divider />
          </li>
          <NavButton
            size={'medium'}
            backgroundColor={'#60A5FA'}
            description="Stopwatch"
            href="/stopwatch"
          />
          <li className="text-gray-300 pt-2">
            <Divider />
          </li>
          <SignedIn>
            <NavButton
              size={'medium'}
              backgroundColor={'#60A5FA'}
              description="Awareness"
              href="/aware"
            />
            <li className="text-gray-300 pt-2">
              <Divider />
            </li>
            <NavButton
              size={'small'}
              backgroundColor={'#60A5FA'}
              description="Players"
              href="/players"
            />
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
        <ThemeButton size={'w-6 h-6'} onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ? '' : ''}
        </ThemeButton>
        <UserButton />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faBars}
          style={{ fontSize: 25 }}
          onClick={handleOpen}
        />
        <RightMenu open={isMenuOpen} handleClose={handleClose} />
      </div>
    </header>
  )
}

export default Nav
