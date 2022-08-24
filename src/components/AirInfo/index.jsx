import { useSelector } from 'react-redux'
import Card from '../Card'
import * as S from './style'

function AirInfo(props) {
  const { loading, error } = useSelector((state) => state.airInfo)

  if (loading)
    return (
      <S.ContentBox>
        <S.ContentBoxInner>로딩중...</S.ContentBoxInner>
      </S.ContentBox>
    )
  if (error)
    return (
      <S.ContentBox>
        <S.ContentBoxInner>에러 발생</S.ContentBoxInner>
      </S.ContentBox>
    )
  if (props.data.length < 0)
    return (
      <S.ContentBox>
        <S.ContentBoxInner>{props.text}</S.ContentBoxInner>
      </S.ContentBox>
    )
  return (
    <S.ContentBox>
      <S.CardContainer>
        {props.data.map((db) => {
          let fineDustLevel =
            Number(db.pm10Value) <= 30
              ? { level: '좋음', color: '#87CEEB ' }
              : Number(db.pm10Value) <= 80
              ? { level: '보통', color: '#87EC9B' }
              : Number(db.pm10Value) <= 150
              ? { level: '나쁨', color: '#FFC640' }
              : 150 < Number(db.pm10Value)
              ? { level: '매우나쁨', color: '#FF406D' }
              : { level: '알수없음', color: '#C0C0C0' }
          return (
            <Card
              key={db.stationName}
              data={db}
              sidoName={db.sidoName}
              stationName={db.stationName}
              fineDust={db.pm10Value}
              fineDustLevel={fineDustLevel}
              dataTime={db.dataTime}
              bookmark={db.isBookmarked}
              star={props.star}
              bookmarkHandler={props.bookmarkHandler}
            />
          )
        })}
      </S.CardContainer>
    </S.ContentBox>
  )
}

export default AirInfo
