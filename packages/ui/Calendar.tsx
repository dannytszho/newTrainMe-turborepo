import {
  add,
  startOfToday,
  format,
  parse,
  parseISO,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDay,
  isEqual,
  isToday,
  isSameMonth,
  isSameDay,
} from 'date-fns'
import { Fragment, useState } from 'react'
import MapModal from './public/common/MapModal'
import GoogleMaps from 'ui/public/common/GoogleMaps'
import { NextMonthIcon, PrevMonthIcon } from './buttons/ChangeMonthIcon'

const games = [
  {
    id: 1,
    location: 'Grossmont High school',
    opponent: 'Guadalajara',
    gameDateTime: '2022-06-18T13:00',
  },
  {
    id: 2,
    location: 'Mount Miguel High school',
    opponent: 'Valencia CF',
    gameDateTime: '2022-06-25T11:00',
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Calendar = () => {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMMM-yyyy', new Date())
  const [showModal, setShowModal] = useState(false)

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const selectedDayGames = games.filter(game =>
    isSameDay(parseISO(game.gameDateTime), selectedDay),
  )

  return (
    <>
      <div className="max-w-md px-4 py-2 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="grid grid-cols-1 divide-y">
          <div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-sm font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </div>
              <div className="flex">
                <PrevMonthIcon previousMonth={previousMonth} size={'small'} />
                <NextMonthIcon nextMonth={nextMonth} size={'small'} />
              </div>
            </div>
            <div className="grid grid-cols-7 mt-4 text-sm text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-xs">
              {days.map((day, dayIndex) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIndex === 0 && colStartClasses[getDay(day)],
                    'py-1.5',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                  <div className="w-1 h-1 mx-auto">
                    {games.some(game =>
                      isSameDay(parseISO(game.gameDateTime), day),
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="text-black">
            <h2 className="text-black font-semibold text-sm pt-2">
              Schdule for next game
            </h2>
            <ol className="mt-2 text-gray-500 text-xs">
              {selectedDayGames.length > 0 ? (
                selectedDayGames.map(game => (
                  <li key={game.id}>
                    <div
                      className="py-1 hover:underline"
                      onClick={() => setShowModal(true)}
                    >
                      {game.location}
                    </div>
                    <div>
                      <time dateTime={game.gameDateTime}>
                        {format(parseISO(game.gameDateTime), 'h:mm a')}
                      </time>
                    </div>
                    <div className="py-2">vs {game.opponent}</div>
                    <div>
                      {showModal ? (
                        <MapModal onClick={() => setShowModal(false)} />
                      ) : null}
                    </div>
                  </li>
                ))
              ) : (
                <p>No game for this week</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default Calendar
