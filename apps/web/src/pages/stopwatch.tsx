import React, { useEffect, useState } from 'react'
import StopwatchButton from 'ui/buttons/StopWatchButton'

/**
  TODO: convert state to useReducer
 * 
*/

const formatNumber = (number: number): string => `0${number}`.slice(-2)

const getRemaining = (time: number) => {
  const mins = Math.floor((+time / 60000) % 60)
  const secs = Math.floor((+time / 1000) % 60)
  const ms = (+time / 10) % 1000
  return {
    mins: formatNumber(mins),
    secs: formatNumber(secs),
    ms: formatNumber(ms),
  }
}
const StopWatch = () => {
  const [remainingSecs, setRemainingSecs] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const { mins, secs, ms } = getRemaining(remainingSecs)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setRemainingSecs(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval: any = null
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(input => input + 10)
      }, 10)
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, remainingSecs])

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h3 className="m-10 text-7xl">{`${mins}:${secs}:${ms}`}</h3>
      <div>
        <StopwatchButton
          size={'h-20 w-20'}
          borderColor={'#BFDBFE'}
          borderSize={'2px'}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </StopwatchButton>
        <StopwatchButton
          size={'h-20 w-20'}
          borderColor={'#BFDBFE'}
          borderSize={'2px'}
          onClick={reset}
        >
          Reset
        </StopwatchButton>
      </div>
    </div>
  )
}

export default StopWatch
