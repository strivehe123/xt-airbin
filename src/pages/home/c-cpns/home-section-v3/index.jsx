import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'

import RoomItem from '@/components/room-item'
const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="plus-list">
        <ScrollView>
          {infoData?.list?.map((item, index) => (
            <RoomItem key={index} itemData={item} itemWidth="20%" />
          ))}
        </ScrollView>
      </div>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
