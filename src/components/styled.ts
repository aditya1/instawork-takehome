import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin: 8px 0;
  padding: 10px;
`

export const Select = styled.select`
  margin: 8px 0;
  padding: 10px;
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;

  &:first-of-type {
    margin-right: 10px;
  }
`
