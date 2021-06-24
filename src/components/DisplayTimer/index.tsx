import React, { useState, useEffect, FC } from 'react'
import { Time } from '../../types'
import * as SC from './styles'

interface ITimerDisplayProps {
  setTime: React.Dispatch<React.SetStateAction<Time>>
  running: boolean
}

const regex: RegExp = /[0-9]/
const colonPositions: number[] = [1, 4]

const TimerInput: FC<ITimerDisplayProps> = ({ setTime, running }) => {
  const [input, setInput] = useState<string>('00:00:10')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((input: string) => {
      if (!regex.test(e.target.value)) return input

      if (colonPositions.includes(input.length)) return `${e.target.value}:`

      return e.target.value
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInput((input: string) => {
      if (e.key === 'Backspace')
        // if (input.endsWith(':'))
        return (
          input.substring(0, input.length - 2) + input.slice(input.length - 1)
        )

      return input
    })
  }

  useEffect(() => {
    const [hours, minutes, seconds] = input
      .split(':')
      .map(unit => parseInt(unit))

    setTime({ hours, minutes, seconds })
  }, [input, setTime])

  return (
    <SC.Input
      type='text'
      value={input}
      maxLength={8}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TimerInput
