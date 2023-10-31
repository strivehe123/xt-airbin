import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { SectionTabWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleItemClick(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <SectionTabWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => (
          <div
            className={classNames('item', { active: index === currentIndex })}
            key={index}
            onClick={(e) => handleItemClick(index, item)}
          >
            {item}
          </div>
        ))}
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
}

export default SectionTabs
