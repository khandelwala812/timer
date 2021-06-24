import { useState, useEffect, useMemo, FC } from 'react'
import GlobalStyles from '../../globalStyles'
import * as SC from './styles'
import { Time } from '../../types'
import ToggleButton from '../ToggleButton'
import TimerInput from '../DisplayTimer'
import TimeManager from '../../classes/TimeManager'

const generateTime = () => {
  return {
    hours: 0,
    minutes: 0,
    seconds: 10
  } as Time
}

const Timer: FC = () => {
  const [time, setTime] = useState<Time>(generateTime())
  const [running, setRunning] = useState<boolean>(false)
  // const [milliseconds, setMilliseconds] = useState<number>(0)
  const timeManager = useMemo<TimeManager>(
    () => new TimeManager(setTime, setRunning),
    []
  )

  const onToggle = () => {
    setRunning(running => !running)
  }

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setTime((time: Time) => {
        const tc: Time = { ...time }

        if (!running) {
          clearInterval(interval)
          return tc
        }

        if (!tc.hours && !tc.minutes && !tc.seconds) {
          clearInterval(interval)
          setRunning(false)
          return tc
        }

        return timeManager.change(tc)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [running, timeManager])

  return (
    <SC.Wrapper>
      <GlobalStyles />
      <TimerInput setTime={setTime} running={running} />
      <ToggleButton running={running} onClick={onToggle} />
    </SC.Wrapper>
  )
}

export default Timer
