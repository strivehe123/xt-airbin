import { createSlice } from '@reduxjs/toolkit'
const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoction(state, { payload }) {
      state.detailInfo = payload
    },
  },
})
export const { changeDetailInfoction } = detailSlice.actions
export default detailSlice.reducer
