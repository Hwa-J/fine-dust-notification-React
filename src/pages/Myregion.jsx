import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAirInfo } from '~/modules/air-info'
import AirInfo from '../components/AirInfo'
import Select from '../components/Select'
import { sidoNames } from '~/constants'
import Header from '../components/Header'

function Myregion() {
  const dispatch = useDispatch()

  // 미세먼지 api 호출
  useEffect(() => {
    dispatch(getAirInfo())
  }, [])

  // 미세먼지 data 할당
  const { data } = useSelector((state) => state.airInfo)

  const [selectedSido, setSelectedSido] = useState('')
  const getSidoName = (name) => {
    setSelectedSido(name)
  }

  let filteredSidoData = data.filter((item) => item.sidoName === selectedSido)
  let stationNames = filteredSidoData.map((item) => item.stationName)
  console.log('filter', stationNames)

  const [selectedStation, setSelectedStation] = useState('')
  const getStationName = (name) => {
    setSelectedStation(name)
  }

  let filteredStationData = data.filter(
    (item) => item.stationName === selectedStation
  )

  return (
    <>
      <Header>
        <Select name={'시/도'} items={sidoNames} getValue={getSidoName} />
        <Select
          width={'12.8rem'}
          name={'지역'}
          items={stationNames}
          getValue={getStationName}
        />
      </Header>
      <AirInfo
        data={filteredStationData}
        bookmark={null}
        text={'지역을 선택하세요.'}
      />
    </>
  )
}

export default Myregion
