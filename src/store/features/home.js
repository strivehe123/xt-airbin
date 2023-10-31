import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData,
} from '@/services/'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res))
    })
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountAction(res))
    })
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendAction(res))
    })
    getHomeLongForData().then((res) => {
      dispatch(changeLongInfoAction(res))
    })
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res))
    })
    // return res
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longInfoData: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongInfoAction(state, { payload }) {
      state.longInfoData = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   },
  // },
})
export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeRecommendAction,
  changeLongInfoAction,
  changePlusInfoAction,
} = homeSlice.actions
export default homeSlice.reducer
