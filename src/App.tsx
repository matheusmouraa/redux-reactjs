import { Provider } from 'react-redux'
import { store } from './app/store'

import { FormContainer } from './components/FormContainer'
import { CardsContainer } from './components/CardsContainer'

function App() {
  return (
    <Provider store={store}>
      <FormContainer />
      <CardsContainer />
    </Provider>
  )
}

export default App
