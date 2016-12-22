import React from 'react'
import Timer from '../Timer/Timer'
import Card from './card'
import styles from './Game.scss'


export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      difficulty: 'easy',
      cards: {},
      running: false,
      lastMove: null,
      matches: 0,
    }
  }

  componentWillMount() {
    this.props.requestCards()
  }

  componentWillReceiveProps(nextProps) {
    this.getCards(nextProps.cards)
  }

  getCards(data) {
    const cards = []
    let icons = []
    data.levels.forEach((level) => {
      if (level.difficulty === this.state.difficulty) {
        icons = level.cards
      }
    })
    icons.forEach((icon) => {
      const card = { icon, flipped: false, matched: false }
      cards.push(card)
    })
    this.setState({ cards })
  }

  makeCards() {
    if (this.state.cards.length > 0) {
      return this.state.cards.map((card, key) =>
        <Card
          key={key}
          icon={card.icon}
          flipped={card.flipped}
          matched={card.matched}
        />
    ) }
    return []
  }

  render() {
    let cards
    if (this.props.cards.levels) {
      cards = this.makeCards()
    }
    // const cards = this.makeCards()
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
