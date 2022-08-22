import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import Card from '../Card'
import * as S from './style'

function AirInfo(props) {
  const { loading, error } = useSelector((state) => state.airInfo)

  if (loading)
    return (
      <S.ContentBox>
        <div>로딩중...</div>
      </S.ContentBox>
    )
  if (error)
    return (
      <S.ContentBox>
        <div>에러 발생</div>
      </S.ContentBox>
    )
  if (!props.data)
    return (
      <S.ContentBox>
        <div>지역을 선택하세요</div>
      </S.ContentBox>
    )
  return (
    <S.ContentBox>
      <S.CardContainer>
        {props.data.map((db) => {
          let id = nanoid()
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
              key={id}
              sidoName={db.sidoName}
              stationName={db.stationName}
              fineDust={db.pm10Value}
              fineDustLevel={fineDustLevel}
              dataTime={db.dataTime}
            />
          )
        })}
      </S.CardContainer>
    </S.ContentBox>
  )
}

export default AirInfo
