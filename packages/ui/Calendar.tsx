import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const Calendar = () => {
  return (
    <>
      <h2 className="text-black">calendar</h2>
      <div>
        <FontAwesomeIcon
          className="cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
          icon={faChevronLeft}
          style={{ fontSize: 15 }}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-4 h-4 text-gray-400 hover:text-gray-600"
          icon={faChevronRight}
          style={{ fontSize: 15 }}
        />
      </div>
    </>
  )
}

export default Calendar
