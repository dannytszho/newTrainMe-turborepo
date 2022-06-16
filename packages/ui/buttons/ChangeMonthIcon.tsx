import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export const PrevMonthIcon = ({
  previousMonth,
}: {
  previousMonth: () => void
}) => {
  return (
    <button
      type="button"
      onClick={previousMonth}
      className="-my-1 flex flex-none items-center justify-center p-1.5 cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 15 }} />
    </button>
  )
}

export const NextMonthIcon = ({ nextMonth }: { nextMonth: () => void }) => {
  return (
    <button
      type="button"
      onClick={nextMonth}
      className="-my-1 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 15 }} />
    </button>
  )
}
