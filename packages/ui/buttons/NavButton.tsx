import * as React from 'react'
import Link from 'next/link'


const NavButton = ({ 
  description, 
  href,
  size
}: {
  description: string
  href: string
  size: string
}) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className={`cursor-pointer rounded-full bg-blue-400 ${size} text-white drop-shadow-lg`}
      >
        {description}
      </button>
    </Link>
  )
}
export default NavButton
