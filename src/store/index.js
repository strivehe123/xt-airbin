import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './features/main'
import entireReducer from './features/entire'
import homeReducer from './features/home'
import detailReducer from './features/detail'
const store = configureStore({
  reducer: {
    main: mainReducer,
    entire: entireReducer,
    home: homeReducer,
    detail: detailReducer,
  },
})
export default store
