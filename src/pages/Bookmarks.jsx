import React from 'react'
import Header from '../components/Header'
import AirInfo from '../components/AirInfo'
import { useDispatch, useSelector } from 'react-redux'

function Bookmark() {
  const { bookmarkedAirInfo } = useSelector((state) => state.airInfo)

  const REMOVE_BOOKMARKED_AIR_INFO = 'air-info/REMOVE_BOOKMARKED_AIR_INFO'

  const dispatch = useDispatch()
  const remover = (item) =>
    dispatch({
      type: REMOVE_BOOKMARKED_AIR_INFO,
      payload: item,
    })

  return (
    <>
      <Header>즐겨찾기 목록</Header>
      <AirInfo
        text={'즐겨찾기가 없습니다.'}
        data={bookmarkedAirInfo}
        star={true}
        bookmarkRemoveHandler={remover}
      />
    </>
  )
}

export default Bookmark
