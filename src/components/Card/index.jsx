import React from 'react'
import * as S from './style'
import { FaStar, FaRegStar } from 'react-icons/fa'

function Card({
  data,
  sidoName,
  stationName,
  fineDust,
  dataTime,
  fineDustLevel,
  star,
  bookmark,
  bookmarkHandler,
}) {
  return (
    <S.Card color={fineDustLevel.color}>
      <S.CardHeaderWrapper>
        <S.CardHeaderTextWrapper>
          <S.CardHeaderText>{stationName}</S.CardHeaderText>
          <S.CardText>{sidoName}</S.CardText>
        </S.CardHeaderTextWrapper>
        {!star ? (
          ''
        ) : (
          <S.CardHeaderText
            cursor="pointer"
            onClick={() => {
              bookmarkHandler(data)
              console.log(data)
            }}
          >
            {bookmark ? <FaStar /> : <FaRegStar />}
          </S.CardHeaderText>
        )}
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
