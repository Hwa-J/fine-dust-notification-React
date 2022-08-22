import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAirInfo } from '~/modules/air-info'
import AirInfo from '../components/AirInfo'
import Select from '../components/Select'
import { sidoNames } from '~/constants'
import Header from '../components/Header'

function Myregion() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAirInfo('서울'))
  }, [])
  const { data } = useSelector((state) => state.airInfo)

  let getData = !data ? [] : data

  let stationName = getData.map((item, i) => {
    return item.stationName
  })

  const [selectedStation, setSelectedStation] = useState('')
  const getStationName = (name) => {
    setSelectedStation(name)
  }

  let filteredStationData = getData.filter(
    (item) => item.stationName === selectedStation
  )

  return (
    <>
      <Header>
        <Select name={'시/도'} items={sidoNames} dispatchHandler={getAirInfo} />
        <Select
          width={'12.8rem'}
          name={'지역'}
          items={stationName}
          getValue={getStationName}
        />
      </Header>
      <AirInfo data={filteredStationData} />
    </>
  )
}

export default Myregion
