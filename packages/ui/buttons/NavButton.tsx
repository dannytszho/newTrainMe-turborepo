import * as React from 'react'
import Link from 'next/link'

interface IProps {
  description: string
  href: string
}

const NavButton = ({ description, href }: IProps) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className="cursor-pointer rounded-full bg-blue-400 px-4 py-1 text-white drop-shadow-lg"
      >
        {description}
      </button>
    </Link>
  )
}
export default NavButton
