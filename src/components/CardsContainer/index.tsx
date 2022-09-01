import { useDispatch, useSelector } from 'react-redux'
import { remove, useCards } from '../../store/cardsSlice'

export function CardsContainer() {
  const cards = useSelector(useCards)

  const dispatch = useDispatch()

  function handleRemoveCard() {
    dispatch(
      remove({
        age: 25,
        email: 'madsjjasdsudau@gmail.com',
        firstName: 'samksdsamkm',
        lastName: 'damsdsadsajsjda'
      })
    )
    console.log(cards)
  }

  return (
    <div>
      <button onClick={handleRemoveCard} />
    </div>
  )
}
