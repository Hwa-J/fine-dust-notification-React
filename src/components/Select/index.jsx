import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'

function Select(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <S.Select
        width={props.width}
        onChange={(e) => {
          if (props.dispatchHandler) {
            dispatch(props.dispatchHandler(e.target.value))
          }
          if (props.getValue) {
            props.getValue(e.target.value)
          }
        }}
      >
        {props.name ? <option>{props.name}</option> : ''}
        {props.items.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </S.Select>
    </div>
  )
}

export default Select
