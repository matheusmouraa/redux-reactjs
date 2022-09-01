import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardInfoType } from '../@types'

const initialState: CardInfoType[] = []

const sliceCards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<CardInfoType>) {
      if (!state.includes(payload)) {
        state.push(payload)
      }
    },
    remove(state, { payload }: PayloadAction<CardInfoType>) {
      state.splice(state.indexOf(payload), 1)
    }
  }
})

export default sliceCards.reducer
export const { add, remove } = sliceCards.actions

export const useCards = (state: any) => {
  return state.cards as CardInfoType[]
}
