import PropTypes from 'prop-types'
import React, { memo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrow from '@/assets/svg/icon-arrow'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconTransform from '@/assets/svg/icon-transform'
import IconTrangleUp from '@/assets/svg/icon-trangle-up'
import Indicator from '@/base-ui/indicator'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)
  //关闭滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  // 关闭图片查看器
  function closeClickHandle() {
    closeClick?.()
  }
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }
  function bottomClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }
  return (
    <PictureBrowserWrapper isnext={isNext} showlist={showList}>
      <div className="top">
        <div className="close" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="right btn" onClick={(e) => controlClickHandle(true)}>
            <IconArrow width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="fade"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
          </div>
          <div className="toggle" onClick={(e) => setShowList(!showList)}>
            <span>{showList ? '隐藏' : '显示'}图片列表</span>
            {showList ? <IconTransform /> : <IconTrangleUp />}
          </div>
        </div>
        <div className="list">
          <Indicator selectIndex={currentIndex}>
            {pictureUrls.map((item, index) => (
              <div
                onClick={(e) => bottomClickHandle(index)}
                className={classNames('item', {
                  active: currentIndex === index,
                })}
                key={item}
              >
                <img src={item} alt="" />
              </div>
            ))}
          </Indicator>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser
