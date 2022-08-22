import React from 'react'
import * as S from './style'

function Card({ sidoName, stationName, fineDust, dataTime, fineDustLevel }) {
  return (
    <S.Card color={fineDustLevel.color}>
      <S.CardHeaderWrapper>
        <S.CardHeaderTextWrapper>
          <S.CardHeaderText>{stationName}</S.CardHeaderText>
          <S.CardText>{sidoName}</S.CardText>
        </S.CardHeaderTextWrapper>
        <S.CardHeaderText>☆</S.CardHeaderText>
      </S.CardHeaderWrapper>
      <S.CardValueContainer>
        <S.CardValue color={fineDustLevel.color}>
          {fineDustLevel.level}
        </S.CardValue>
      </S.CardValueContainer>
      <S.CardInfoWrapper>
        <S.CardText>미세먼지 수치 : {fineDust}</S.CardText>
        <S.CardText>({dataTime} 기준)</S.CardText>
      </S.CardInfoWrapper>
    </S.Card>
  )
}

export default Card
