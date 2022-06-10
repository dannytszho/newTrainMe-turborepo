import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  startOfToday,
  format,
  parse,
  parseISO,
  eachDayOfInterval,
  endOfMonth,
} from 'date-fns'
import { Fragment, useState } from 'react'

const Calendar = () => {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })
  return (
    <>
      <div className="max-w-md px-4 py-2 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm font-semibold text-gray-900">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </div>
          <div className="flex">
            <button
              type="button"
              className="-my-1 flex flex-none items-center justify-center p-1.5 cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 15 }} />
            </button>
            <button
              type="button"
              className="-my-1 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 15 }} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 mt-10 text-xs text-center text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
      </div>
    </>
  )
}

export default Calendar
