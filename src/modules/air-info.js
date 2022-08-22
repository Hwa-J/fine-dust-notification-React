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

// 액션 생성 함수
export const getAirInfo = (sidoName = '전국') => async (dispatch, getState) => {
  dispatch({ type: GET_AIR_INFO }) // 요청이 시작됨
  try {
    const response = await axios.get(
      END_POINT,
      { params: {...getParameters, sidoName} }); // API 호출
    dispatch({ 
      type: GET_AIR_INFO_SUCCESS, 
      payload: {data: response.data.response.body.items} 
    }); // 성공
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
  data: null,
  error: null
}

// 리듀서 선언
export default function airInfo(state = initialState, action) {
  switch (action.type) {
    case GET_AIR_INFO:
      return {
        loading: true,
        data: null,
        error: null
      }
    case GET_AIR_INFO_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null
      }
    case GET_AIR_INFO_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default:
      return state
  }
}
