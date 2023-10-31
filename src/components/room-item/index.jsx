import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import classNames from 'classnames'
import { RoomWrapper } from './style'
import { Rate, Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrow from '@/assets/svg/icon-arrow'
import Indicator from '@/base-ui/indicator'
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const slideRef = useRef()
  const handleClick = (left, event) => {
    left ? slideRef.current.prev() : slideRef.current.next()
    // 最新索引
    let newIndex = left ? selectIndex - 1 : selectIndex + 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData)
  }
  const slideElement = (
    <div className="slide">
      <div className="control">
        <div className="btn left" onClick={(e) => handleClick(true, e)}>
          <IconArrowLeft height="30" width="30" />
        </div>
        <div className="btn right" onClick={(e) => handleClick(false, e)}>
          <IconArrow height="30" width="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => (
            <div key={item} className="dot-item">
              <span
                className={classNames('dot', { active: selectIndex === index })}
              ></span>
            </div>
          ))}
        </Indicator>
      </div>
      <Carousel dots={false} ref={slideRef}>
        {itemData.picture_urls?.map((item) => (
          <div className="cover" key={item}>
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  )
  return (
    <RoomWrapper
      verifycolor={itemData?.verify_info?.text_color ?? '#39576a'}
      itemwidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        {itemData.picture_urls?.length ? slideElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages?.join('.')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <span className="star">
            <Rate
              disabled
              defaultValue={itemData?.star_rating ?? 3}
              style={{ fontSize: 12, color: itemData.star_rating_color }}
            />
          </span>
          <span className="count">{itemData.reviews_count}</span>
          <div className="extra">{itemData?.bottom_info?.content}</div>
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
}

export default RoomItem
