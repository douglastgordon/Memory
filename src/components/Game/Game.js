import React from 'react'
import Timer from '../Timer/Timer'
import Card from '../Card/card'
import Winner from '../Winner/winner'
import Start from '../Start/start'
import SwatchSelector from '../SwatchSelector/swatch_selector'
import styles from './Game.scss'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.processMove = this.processMove.bind(this)
    this.changeDifficulty = this.changeDifficulty.bind(this)
    this.startTimedGame = this.startTimedGame.bind(this)
    this.startFlipsGame = this.startFlipsGame.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
    this.quit = this.quit.bind(this)
    this.playAgain = this.playAgain.bind(this)
    this.changeSwatch = this.changeSwatch.bind(this)
    this.state = {
      difficulty: 'easy',
      cards: [],
      timedRunning: false,
      flipsRunning: false,
      lastMoveIds: [],
      locked: true,
      elapsedTime: 0,
      flips: 0,
      won: false,
      swatch: 'barber',
    }
  }

  componentWillMount() {
    this.props.requestCards()
    this.props.requestTriples()
  }

  componentWillReceiveProps(nextProps) {
    this.setCardsState(nextProps.cards)
  }

  setCardsState(data) {
    const cards = []
    let icons = []
    data.forEach((level) => {
      if (level.difficulty === this.state.difficulty) {
        icons = shuffleArray(level.cards)
      }
    })
    icons.forEach((icon) => {
      const card = { icon, flipped: false, matched: false }
      cards.push(card)
    })
    this.setState({ cards })
  }

  processMove(id) {
    if (this.isLocked() || this.isCardFlipped(id)) { return }
    const cards = this.state.cards
    const lastMoveIds = this.state.lastMoveIds

    lastMoveIds.push(id)
    cards[id].flipped = true
    this.increaseFlipScore()
    this.setState({ cards, lastMoveIds }, () => {
      if (this.lastFlipOfTurn()) {
        if (this.isMatch()) {
          this.nextTurn()
        } else {
          this.flipUnmatchedCards()
        }
      }
    })
  }

  isLocked() {
    return this.state.locked
  }

  isCardFlipped(id) {
    return this.state.cards[id].flipped
  }


  increaseFlipScore() {
    this.setState({ flips: this.state.flips + 1 })
  }

  lastFlipOfTurn() {
    const lastMoveIds = this.state.lastMoveIds
    const easySetLength = 2
    const hardSetLength = 2
    const triplesSetLength = 3
    switch (this.state.difficulty) {
      case 'easy':
        return lastMoveIds.length === easySetLength
      case 'hard':
        return lastMoveIds.length === hardSetLength
      case 'triples':
        return lastMoveIds.length === triplesSetLength
      default:
        return false
    }
  }

  flipUnmatchedCards() {
    const lastMoveIds = this.state.lastMoveIds
    const cards = this.state.cards
    setTimeout(() => {
      lastMoveIds.forEach((id) => {
        cards[id].flipped = false
      })
      this.setState({
        cards,
        lastMoveIds: [],
        locked: false,
      })
    }, 500)
  }

  isMatch() {
    const cards = this.state.cards
    const lastMoveIds = this.state.lastMoveIds
    const firstCardIcon = cards[lastMoveIds[0]].icon

    let match = true
    lastMoveIds.forEach((id) => {
      if (cards[id].icon !== firstCardIcon) { match = false }
    })
    return match
  }

  nextTurn() {
    const cards = this.state.cards
    const lastMoveIds = this.state.lastMoveIds
    lastMoveIds.forEach((id) => {
      cards[id].matched = true
    })
    this.setState({ cards, lastMoveIds: [] }, () => {
      if (this.gameWon()) {
        this.setState({
          timedRunning: false,
          flipsRunning: false,
          locked: true,
          won: true,
        })
      }
    })
  }

  gameWon() {
    let isWon = true
    this.state.cards.forEach((card) => {
      if (!card.matched) {
        isWon = false
      }
    })
    return isWon
  }

  makeCards() {
    if (this.state.cards.length > 0) {
      return this.state.cards.map((card, id) =>
        <Card
          key={id}
          id={id}
          icon={card.icon}
          flipped={card.flipped}
          matched={card.matched}
          processMove={this.processMove}
          swatch={this.state.swatch}
        />
    ) }
    return []
  }

  // methods for Start component
  changeDifficulty(difficulty) {
    this.setState({ difficulty }, () => {
      this.setCardsState(this.props.cards)
    })
  }

  startTimedGame() {
    this.setState({ timedRunning: true, locked: false })
  }

  startFlipsGame() {
    this.setState({ flipsRunning: true, locked: false })
  }

  updateTimer() {
    this.setState({ elapsedTime: this.state.elapsedTime + 1 })
  }

  // Methods for Winner component
  quit() {
    this.setState({
      timedRunning: false,
      flipsRunning: false,
      lastMoveIds: [],
      locked: true,
      elapsedTime: 0,
      flips: 0,
      won: false,
    })
    this.changeDifficulty('easy')
  }

  playAgain(mode) {
    this.changeDifficulty(this.state.difficulty)
    if (mode === 'timed') {
      this.setState({ timedRunning: true })
    } else {
      this.setState({ timedRunning: true })
    }
    this.setState({
      lastMoveIds: [],
      locked: false,
      elapsedTime: 0,
      flips: 0,
      won: false,
    })
  }

  // method for SwatchSelector component
  changeSwatch(e) {
    const swatch = e.target.id
    if (swatch !== '0') {
      this.setState({ swatch })
    }
  }

  render() {
    const cards = this.makeCards()

    // quit game button
    let quit
    if (this.state.timedRunning || this.state.flipsRunning) {
      quit = (
        <p className={styles.quit} onClick={this.quit}>
          Quit
        </p>
      )
    }

    // score indicator (either time or flips)
    let score
    if (this.state.timedRunning) {
      score = <Timer className={styles.score} updateTimer={this.updateTimer} />
    } else if (this.state.flipsRunning) {
      score = <p className={styles.score}>{this.state.flips}</p>
    }

    // game setup display
    let start
    if (!this.state.timedRunning && !this.state.flipsRunning && !this.state.won) {
      start =
      (<Start
        startTimedGame={this.startTimedGame}
        startFlipsGame={this.startFlipsGame}
        changeDifficulty={this.changeDifficulty}
      />)
    }

    // game won display
    let winner
    if (this.state.won) {
      winner = (
        <Winner
          difficulty={this.state.difficulty}
          elapsedTime={this.state.elapsedTime}
          flips={this.state.flips}
          settings={this.quit}
          playAgain={this.playAgain}
        />
      )
    }

    const extended = this.state.difficulty === 'triples' ? styles.wide : ''

    return (
      <div className={styles.body}>
        <h1 className={styles.header}>Memory</h1>
        {score}
        <div className={styles.content}>
          {start}
          {winner}
          <div className={`${styles.gamearea} ${extended}`}>
            {cards}
          </div>
        </div>
        {quit}
        <SwatchSelector
          swatch={this.state.swatch}
          changeSwatch={this.changeSwatch}
        />
      </div>
    )
  }
}

Game.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object),
  requestCards: React.PropTypes.func.isRequired,
  requestTriples: React.PropTypes.func.isRequired,
}
