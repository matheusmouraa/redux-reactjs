import { Provider } from 'react-redux'
import store from './store/store'

import { FormContainer } from './components/FormContainer'
import { CardsContainer } from './components/CardsContainer'

import './global/styles.scss'

function App() {
  return (
    <Provider store={store}>
      <FormContainer />
      <CardsContainer />
    </Provider>
  )
}

export default App
