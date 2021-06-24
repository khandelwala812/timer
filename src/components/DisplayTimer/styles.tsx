import styled from 'styled-components'

export const Input = styled.input`
  width: 8rem;
  font-size: 24px;
  border: none;
  border-width: 3px;
  outline: none;
  text-align: center;
  &:focus {
    border-bottom: 3px solid black;
    font-size: 16px;
  }
`
