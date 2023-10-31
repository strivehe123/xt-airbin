import xtRequest from '../request'

export function getHomeGoodPriceData() {
  return xtRequest.get({ url: '/home/goodprice' })
}

export function getHomeHighScoreData() {
  return xtRequest.get({ url: '/home/highscore' })
}
export function getHomeDiscountData() {
  return xtRequest.get({ url: '/home/discount' })
}
export function getHomeHotRecommendData() {
  return xtRequest.get({ url: '/home/hotrecommenddest' })
}

export function getHomeLongForData() {
  return xtRequest.get({ url: '/home/longfor' })
}
export function getHomePlusData() {
  return xtRequest.get({ url: '/home/plus' })
}
