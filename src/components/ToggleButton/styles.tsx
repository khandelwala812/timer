import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.theme.color};
  width: 10rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 1rem;
  color: white;
  border: 2px solid ${props => props.theme.color};
  margin: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border-color: black;
  }
  transition: background 0.25s;
`
