import React, { memo, useState, useEffect, useRef } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrow from '@/assets/svg/icon-arrow'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const scrollContentRef = useRef()
  const posIndex = useRef(0)
  const totalDistanceRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    totalDistanceRef.current = scrollWidth - clientWidth

    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])
  const handleClick = (isRight = false) => {
    const newIndex = isRight ? posIndex.current + 1 : posIndex.current - 1

    const newEle = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEle.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posIndex.current = newIndex

    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => handleClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => handleClick(true)}>
          <IconArrow />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
