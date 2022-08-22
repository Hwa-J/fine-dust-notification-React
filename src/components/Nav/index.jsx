import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import {
  FaMapMarkerAlt,
  FaMapMarkedAlt,
  FaStar,
  FaRegStar,
} from 'react-icons/fa'

function Nav() {
  return (
    <S.Nav>
      <Link to="/">
        <S.Wrapper>
          <FaMapMarkerAlt />
          <div>내 지역보기</div>
        </S.Wrapper>
      </Link>
      <Link to="/allRegions">
        <S.Wrapper>
          <FaMapMarkedAlt />
          <div>전체 시도보기</div>
        </S.Wrapper>
      </Link>
      <Link to="/bookmarks">
        <S.Wrapper>
          <FaStar />
          <div>즐겨찾기</div>
        </S.Wrapper>
      </Link>
    </S.Nav>
  )
}

export default Nav
