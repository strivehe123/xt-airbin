import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/features/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongFor from './c-cpns/home-longfor'
import { isEmptyObject } from '@/utils'
const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longInfoData,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longInfoData: state.home.longInfoData,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
      {isEmptyObject(recommendInfo) && (
        <HomeSectionV2 infoData={recommendInfo} />
      )}
      {isEmptyObject(longInfoData) && <HomeLongFor infoData={longInfoData} />}
      {isEmptyObject(goodPriceInfo) && (
        <HomeSectionV1 infoData={goodPriceInfo} />
      )}
      {isEmptyObject(highScoreInfo) && (
        <HomeSectionV1 infoData={highScoreInfo} />
      )}
      {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
    </HomeWrapper>
  )
})

export default Home
