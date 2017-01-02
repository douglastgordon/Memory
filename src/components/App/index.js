import React from 'react'
import { Provider } from 'react-redux';
import Game from '../Game/game_container'

const App = ({ store }) => (
  <Provider store={store}>
    <Game />
  </Provider>
)

export default App
