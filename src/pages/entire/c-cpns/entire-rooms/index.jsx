import React, { memo, useCallback } from 'react'
import { RoomWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoction } from '@/store/features/detail'
const EntireRooms = memo((props) => {
  const { roomList, totalCount, isloading } = useSelector(
    (state) => ({
      isloading: state.entire.isloading,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleItemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfoction(item))
      navigate('/detail')
    },
    [navigate]
  )
  return (
    <RoomWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
        {roomList?.map((item) => (
          <RoomItem
            itemWidth="20%"
            key={item.id}
            itemData={item}
            itemClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      {isloading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRooms
