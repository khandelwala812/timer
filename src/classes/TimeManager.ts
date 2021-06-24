import { Dispatch, SetStateAction } from 'react'
import { Time } from '../types'

export default class TimeManager {
  private setTime: Dispatch<SetStateAction<Time>>
  private setRunning: Dispatch<SetStateAction<boolean>>

  constructor(
    setTime: Dispatch<SetStateAction<Time>>,
    setRunning: Dispatch<SetStateAction<boolean>>
  ) {
    this.setTime = setTime
    this.setRunning = setRunning
  }

  public change(time: Time) {
    if (time.seconds === 0) {
      time.minutes--
      time.seconds = 59
    } else time.seconds--

    return time
  }

  public increment(unit: keyof Time, running: boolean) {
    return () => {
      if (running) this.setRunning(false)

      this.setTime((time: Time) => {
        const tc: Time = { ...time }

        return { ...tc, [unit]: tc[unit] + 1 }
      })
    }
  }

  public decrement(unit: keyof Time) {
    return () =>
      this.setTime((time: Time) => {
        if (time[unit] === 0) return time

        const tc: Time = { ...time }

        return { ...tc, [unit]: tc[unit] - 1 }
      })
  }

  public toTime(input: string) {
    const [hours, minutes, seconds]: number[] = input
      .split(':')
      .map(unit => parseInt(unit))

    return { hours, minutes, seconds } as Time
  }
}
