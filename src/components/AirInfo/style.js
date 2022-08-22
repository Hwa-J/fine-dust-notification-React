import styled from 'styled-components'

export const CardContainer = styled.ul`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ContentBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display:none;
  }
`

export const ContentBoxInner = styled.div`
  margin: auto;

`