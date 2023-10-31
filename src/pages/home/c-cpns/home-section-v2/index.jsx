import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { HomeSectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  // 从props中获取数据
  const { infoData = {} } = props
  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ''
  const [name, setName] = useState(initialName)
  const tabNames = infoData?.dest_address?.map((item) => item.name)
  // 传递给子组件的函数利用useCallback优化
  const tabClickHandle = useCallback((index, name) => {
    setName(name)
  }, [])
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33%" />
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2
