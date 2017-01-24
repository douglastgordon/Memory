import React from 'react'
import Game from '../Game/game.js'
import { getCards, getTriples } from '../../util/game_api_util'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      cards: {},
      triples: {},
    }
  }

  componentDidMount() {
    getCards((cards) => {
      getTriples((triples) => {
        this.setState({ cards, triples })
      })
    })
  }

  render() {
    return (<Game cards={this.state.cards} triples={this.state.triples} />)
  }

}
export default App
