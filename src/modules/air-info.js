import axios from "axios";
import qs from 'qs'

axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { encode: false })
}

const { VITE_SERVICE_KEY } = import.meta.env
const END_POINT = '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

const getParameters = {
  serviceKey: VITE_SERVICE_KEY,
  returnType:'json',
  numOfRows:'631',
  pageNo:'1',
  sidoName: '전국',
  ver:'1.0',
}
// 액션 타입
const GET_AIR_INFO = 'air-info/GET_AIR_INFO'
const GET_AIR_INFO_SUCCESS = 'air-info/GET_AIR_INFO_SUCCESS'
const GET_AIR_INFO_ERROR = 'air-info/GET_AIR_INFO_ERROR'

const GET_BOOKMARKED_AIR_INFO = 'air-info/GET_BOOKMARKED_AIR_INFO'
const REMOVE_BOOKMARKED_AIR_INFO = 'air-info/REMOVE_BOOKMARKED_AIR_INFO'

// 액션 생성 함수
export const getAirInfo = (sidoName = '전국') => async (dispatch, getState) => {
  dispatch({ type: GET_AIR_INFO }) // 요청이 시작됨
  try {
    const { data } = await axios.get(
      END_POINT,
      { params: {...getParameters, sidoName} }); // API 호출
    const airInfo = data.response.body.items.map(item => {
      return (item = { ...item, isBookmarked: false })})
    dispatch({ 
      type: GET_AIR_INFO_SUCCESS, 
      payload: {data: airInfo} 
}) // 성공
  } catch (e) {
    dispatch({ 
      type: GET_AIR_INFO_ERROR, 
      error: e 
    }) // 실패
  }
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
  bookmarkedAirInfo: []
}

// 리듀서 선언
export default function airInfo(state = initialState, action) {
  switch (action.type) {
    case GET_AIR_INFO:
      return {
        loading: true,
        data: [],
        error: null,
        bookmarkedAirInfo: state.bookmarkedAirInfo
      }
    case GET_AIR_INFO_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null,
        bookmarkedAirInfo: state.bookmarkedAirInfo
      }
    case GET_AIR_INFO_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
        bookmarkedAirInfo: state.bookmarkedAirInfo
      }
      case GET_BOOKMARKED_AIR_INFO :
        state.bookmarkedAirInfo.push(
          { ...action.payload, isBookmarked: true })
        return {
          loading: false,
          data: state.data.map(i => { 
            return i.stationName === action.payload.stationName 
            ? {...i, isBookmarked: true} 
            : i
          }),
          error: null,
          bookmarkedAirInfo: state.bookmarkedAirInfo
        }
        case REMOVE_BOOKMARKED_AIR_INFO :
          let removeItem = { ...action.payload, isBookmarked: false }
        return {
          loading: false,
          data: state.data.map(i => {
            return i.stationName === action.payload.stationName 
            ? {...i, isBookmarked: false}
            : i
          }),
          error: null,
          bookmarkedAirInfo: state.bookmarkedAirInfo.filter(item => {
            return item.stationName !== removeItem.stationName
          })
        }
    default:
      return state
  }
}
