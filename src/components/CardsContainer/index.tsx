import { useAppSelector } from '../../store/hooks'
import { useCards } from '../../store/cardsSlice'
import { Card } from '../Card'

import './styles.scss'

export function CardsContainer() {
  const cards = useAppSelector(useCards)

  return (
    <main>
      <div className="cardsGrid">
        {cards.map((item, index) => (
          <Card
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            age={item.age}
          />
        ))}
      </div>
    </main>
  )
}
