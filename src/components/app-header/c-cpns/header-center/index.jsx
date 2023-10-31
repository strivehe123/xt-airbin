import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconLens from '@/assets/svg/icon-lens'
const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconLens />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
