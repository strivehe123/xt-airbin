import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    token: '112323',
  },
  reducers: {
    changeToken(state, action) {
      state.token = action.payload
    },
  },
})
export const { changeToken } = mainSlice.actions
export default mainSlice.reducer
