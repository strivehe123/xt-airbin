import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'
const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )
  const [showBrowser, setShowBrowser] = useState(false)
  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <img src={detailInfo.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item) => (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </DetailPictureWrapper>
  )
})

export default DetailPictures
