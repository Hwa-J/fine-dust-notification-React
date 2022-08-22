import React from 'react'
import Header from '../components/Header'
import AirInfo from '../components/AirInfo'

function Bookmark() {
  return (
    <>
      <Header>즐겨찾기 목록</Header>
      <AirInfo text={'즐겨찾는 지역을 선택하세요.'} />
    </>
  )
}

export default Bookmark
