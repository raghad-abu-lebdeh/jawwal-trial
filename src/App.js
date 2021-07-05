import React from 'react'
import { Provider } from 'react-redux'
import CakeContainer from './Components/CakeStore/CakeContainer'
import store from './redux/cake/store'

const App = () => {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  )
}
export default App
