import { configureStore } from '@reduxjs/toolkit'
import sliceCards from './cardsSlice'

const store = configureStore({
  reducer: {
    cards: sliceCards
  }
})

export default store
