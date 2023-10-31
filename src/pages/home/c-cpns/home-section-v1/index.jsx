import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import SectionRooms from '@/components/section-rooms'
import { SectionV1 } from './style'
const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1>
      <SectionHeader title={infoData.title} />
      <SectionRooms roomList={infoData.list} />
      <SectionFooter />
    </SectionV1>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV1
