import React, { FC } from 'react'
import * as SC from './styles'

interface IButtonProps {
  running: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const TimerButton: FC<IButtonProps> = ({ running, onClick, ...props }) => {
  return (
    <SC.Button
      theme={{
        color: running ? 'hotpink' : 'dodgerblue'
      }}
      onClick={onClick}
      {...props}
    >
      {running ? 'Stop Timer' : 'Start Timer'}
    </SC.Button>
  )
}

export default TimerButton
