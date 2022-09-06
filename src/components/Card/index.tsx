import { remove } from '../../store/cardsSlice'
import { useAppDispatch } from '../../store/hooks'

import { X } from 'react-feather'

import { CardInfoType } from '../../@types'

import './styles.scss'

export function Card({ firstName, lastName, email, age }: CardInfoType) {
  const dispatch = useAppDispatch()

  function handleRemoveCard() {
    dispatch(remove({ firstName, lastName, email, age }))
  }

  return (
    <div className="cardContainer">
      <button className="removeButton" onClick={handleRemoveCard}>
        <X color="black" size={20} />
      </button>

      <h2>{`Nome: ${firstName} ${lastName}`}</h2>

      <h2>{`E-mail: ${email}`}</h2>

      <h2>{`Idade: ${age}`}</h2>
    </div>
  )
}
