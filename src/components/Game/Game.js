import React from 'react'
import Timer from '../Timer/Timer'
import Card from './card'
import styles from './Game.scss'


export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      difficulty: 'easy',
      running: false,
      matches: 0,
    }
  }

  componentWillMount() {
    this.props.requestCards()
  }

  getCurrentCards() {
    let currentCards
    this.props.cards.levels.forEach((level) => {
      if (level.difficulty === this.state.difficulty) {
        currentCards = level.cards
      }
    })
    return currentCards
  }

  makeCards() {
    let currentCards = this.getCurrentCards()
    let i = 0
    currentCards = currentCards.map((icon) => {
      i += 1
      return (
        <Card key={i} img={icon} />
      )
    })
    return currentCards
  }

  render() {
    let cards
    if (this.props.cards.levels) {
      cards = this.makeCards()
    }

    return (
      <div>
        <h1 className={styles.header}>Memory Game</h1>
        <Timer />
        <div className={styles.gamearea}>
          {cards}
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  cards: React.PropTypes.object.isRequired,
  requestCards: React.PropTypes.func.isRequired,
}
