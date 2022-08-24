import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAirInfo } from '~/modules/air-info'
import AirInfo from '../components/AirInfo'
import Select from '../components/Select'
import { sidoNames } from '~/constants'
import Header from '../components/Header'

function AllRegions() {
  const { data } = useSelector((state) => state.airInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    !data && dispatch(getAirInfo('전국'))
  }, [])

  const GET_BOOKMARKED_AIR_INFO = 'air-info/GET_BOOKMARKED_AIR_INFO'
  const REMOVE_BOOKMARKED_AIR_INFO = 'air-info/REMOVE_BOOKMARKED_AIR_INFO'

  const [selectedSido, setSelectedSido] = useState('')

  const getSidoName = (name) => {
    setSelectedSido(name)
  }
  console.log(getSidoName)
  let filteredSidoData = data
    ? selectedSido === '전국'
      ? data
      : data.filter((item) => item.sidoName === selectedSido)
    : []

  const bookmarker = (item) =>
    dispatch({
      type: GET_BOOKMARKED_AIR_INFO,
      payload: item,
    })
  const remover = (item) =>
    dispatch({
      type: REMOVE_BOOKMARKED_AIR_INFO,
      payload: item,
    })

  return (
    <>
      <Header>
        <Select
          width={'10rem'}
          name={'전국'}
          items={sidoNames}
          getValue={getSidoName}
        />
      </Header>
      <AirInfo
        data={filteredSidoData}
        star={true}
        bookmarkHandler={bookmarker}
        bookmarkRemoveHandler={remover}
      />
    </>
  )
}

export default AllRegions
