import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: rgb(33 35 38 / 25%) 0px -5px 10px 0px;
`
export const Wrapper = styled.div`
  min-width: 5.6rem;
  padding: .6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background-color: #777
  }
  & svg {
    margin: .2rem 0;
  }
`