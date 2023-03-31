import { configureStore } from '@reduxjs/toolkit'
import appSlicer from './features/appSlicer'
export const store = configureStore({
  reducer: {
    appSlicer : appSlicer,
  },
})