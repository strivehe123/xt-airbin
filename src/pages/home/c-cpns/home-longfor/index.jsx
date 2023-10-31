import PropTypes from 'prop-types'
import React, { memo } from 'react'

import ScrollView from '@/base-ui/scroll-view'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item, index) => (
            <LongForItem itemData={item} key={index} />
          ))}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
}

export default HomeLongFor
