import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import classNames from 'classnames'
import filterData from '@/assets/data/filter_data.json'
const EntireFilter = memo((props) => {
  const [selecedtItems, setSelectedItems] = useState([])
  function clickHandler(item) {
    const _ = [...selecedtItems]
    if (_.includes(item)) {
      _.splice(
        _.findIndex((filterItem) => filterItem === item),
        1
      )
    } else {
      _.push(item)
    }
    setSelectedItems(_)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => (
          <div
            onClick={(e) => clickHandler(item)}
            className={classNames('item', {
              active: selecedtItems.includes(item),
            })}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
