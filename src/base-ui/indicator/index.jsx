import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const contentRef = useRef()
  useEffect(() => {
    let index = props.selectIndex
    let item = contentRef.current.children[index]
    let totalDistance =
      contentRef.current.scrollWidth - contentRef.current.clientWidth
    let distance =
      item.offsetLeft +
      item.clientWidth * 0.5 -
      contentRef.current.clientWidth * 0.5
    if (distance < 0) distance = 0
    if (distance > totalDistance) distance = totalDistance
    contentRef.current.style.transform = `translate(${-distance}px)`
    // console.log(
    //   item.offsetLeft,
    //   item.clientWidth,
    //   contentRef.current.clientWidth
    // )
  }, [props.selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator
