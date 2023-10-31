import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

const Deomo = memo((props) => {
  const names = ['abc', 'cba', 'nba', 'ccc', 'aaa', 'bbb', 'eee']
  const [selectIndex, setSelectindex] = useState(0)
  function handleToggle(isNext = true) {
    let index = isNext ? selectIndex + 1 : selectIndex - 1
    if (index > names.length - 1) index = 0
    if (index < 0) index = names.length - 1
    setSelectindex(index)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => handleToggle(false)}>上一个</button>
        <button onClick={() => handleToggle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Deomo.propTypes = {}

export default Deomo
