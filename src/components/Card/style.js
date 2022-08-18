import styled from 'styled-components'

export const CardContainer = styled.div`
  color: #fff;
  margin: 1rem auto;
  padding: .4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  height: 12rem;
  background-color: ${(props) => props.color};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

export const CardHeaderWrapper = styled.div`
  margin: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

`

export const CardHeaderTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  `

export const CardHeaderText = styled.p`
  font-size: 1.6rem;
  margin: 0 0.4rem;
  `

export const CardValueContainer = styled.div`
  margin: .4rem;
  padding: 0 .6rem;
  /* width: 6rem; */
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`
export const CardValue = styled.p`
  font-size: 3rem;
  color: ${(props) => props.color};
`

export const CardInfoWrapper = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`

export const CardText = styled.p`
  margin: 0;
  `