import * as actionTypes from './constant'
import { getEntireRoomList } from '@/services'
export const changeCurrentPage = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
})
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
})
export const changeIsloading = (isloading) => ({
  type: actionTypes.CHANGE_ISLOADING,
  isloading,
})
export function fetchRoomListAction() {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    dispatch(changeIsloading(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsloading(false))
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
