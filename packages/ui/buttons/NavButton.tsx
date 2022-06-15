import * as React from 'react'
import Link from 'next/link'

const NavButton = ({
  description,
  href,
  size,
  backgroundColor,
  borderRadius,
}: {
  description: string
  href: string
  size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
  backgroundColor: string
  borderRadius:
    | 'notRounded'
    | 'rounded'
    | 'smallRounded'
    | 'mediumRounded'
    | 'largeRounded'
}) => {
  const sizeMap = {
    xSmall: 'w-20 h-6',
    small: 'w-24 h-8',
    medium: 'w-28 h-8',
    large: 'w-36 h-10',
    xLarge: 'w-48 h-16',
  }
  const borderMap = {
    notRounded: 'rounded-none',
    rounded: 'rounded-full',
    smallRounded: 'rounded-sm',
    mediumRounded: 'rounded-md',
    largeRounded: 'rounded-lg',
  }
  return (
    <Link href={href}>
      <button
        type="button"
        className={[
          'cursor-pointer text-white drop-shadow-lg',
          `${sizeMap[size]}`,
          `${borderMap[borderRadius]}`,
        ].join(' ')}
        style={{ background: `${backgroundColor}` }}
      >
        {description}
      </button>
    </Link>
  )
}
export default NavButton
