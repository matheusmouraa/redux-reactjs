import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

import { CardInfoType } from '../@types'
import { RootState } from './store'

const initialState: CardInfoType[] = []

const sliceCards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<CardInfoType>) {
      state.push(payload)
    },
    remove(state, { payload }: PayloadAction<CardInfoType>) {
      state.splice(state.indexOf(payload), 1)
    }
  }
})

export default sliceCards.reducer
export const { add, remove } = sliceCards.actions

export const useCards = (state: RootState) => {
  return state.cards as CardInfoType[]
}
