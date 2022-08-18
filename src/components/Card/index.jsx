import React from 'react'
import * as S from './style'

function Card(props) {
  // props 먼지 수치에 따라 다른 색상값을 반환하는 함수 추가 예정
  return (
    <S.CardContainer color="skyblue">
      <S.CardHeaderWrapper>
        <S.CardHeaderTextWrapper>
          <S.CardHeaderText>지역구</S.CardHeaderText>
          <S.CardText>도시</S.CardText>
        </S.CardHeaderTextWrapper>
        <S.CardHeaderText>☆</S.CardHeaderText>
      </S.CardHeaderWrapper>
      <S.CardValueContainer>
        <S.CardValue color="skyblue">좋음</S.CardValue>
      </S.CardValueContainer>
      <S.CardInfoWrapper>
        <S.CardText>미세먼지 수치 : </S.CardText>
        <S.CardText>(기준)</S.CardText>
      </S.CardInfoWrapper>
    </S.CardContainer>
  )
}

export default Card
