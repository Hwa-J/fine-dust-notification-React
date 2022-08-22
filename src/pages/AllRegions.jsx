import React, { useEffect } from 'react'
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
    dispatch(getAirInfo('서울'))
  }, [dispatch])

  let getData = !data ? [] : data

  return (
    <>
      <Header>
        <Select
          width={'10rem'}
          items={sidoNames}
          dispatchHandler={getAirInfo}
        />
      </Header>
      <AirInfo data={getData} />
    </>
  )
}

export default AllRegions
