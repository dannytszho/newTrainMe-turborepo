import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const sizeMap = {
  small: 'w-4 h-4',
  medium: 'w-8 h-8',
  large: 'w-16 h-16',
}

const ChangeMonthIcon = ({
  changeMonth,
  children,
}: {
  changeMonth: () => void
  children: React.ReactNode
}) => {
  return (
    <button
      type="button"
      onClick={changeMonth}
      className="-my-1 flex flex-none items-center justify-center p-1.5 cursor-pointer text-gray-400 hover:text-gray-600"
    >
      {children}
    </button>
  )
}

export const PrevMonthIcon = ({
  previousMonth,
  size,
}: {
  previousMonth: () => void
  size: 'small' | 'medium' | 'large'
}) => {
  return (
    <ChangeMonthIcon changeMonth={previousMonth}>
      <FontAwesomeIcon className={`${sizeMap[size]}`} icon={faChevronLeft} />
    </ChangeMonthIcon>
  )
}

export const NextMonthIcon = ({
  nextMonth,
  size,
}: {
  nextMonth: () => void
  size: 'small' | 'medium' | 'large'
}) => {
  return (
    <ChangeMonthIcon changeMonth={nextMonth}>
      <FontAwesomeIcon className={`${sizeMap[size]}`} icon={faChevronRight} />
    </ChangeMonthIcon>
  )
}
