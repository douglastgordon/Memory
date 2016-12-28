import React from 'react'
import Timer from '../Timer/Timer'
import Card from '../Card/card'
import Winner from '../Winner/winner'
import Start from '../Start/start'
import styles from './Game.scss'

export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.processMove = this.processMove.bind(this)
    this.changeDifficulty = this.changeDifficulty.bind(this)
    this.startTimedGame = this.startTimedGame.bind(this)
    this.startFlipsGame = this.startFlipsGame.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
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
    }
  }

  componentWillMount() {
    this.props.requestCards()
    this.props.requestTriples()
  }

  componentWillReceiveProps(nextProps) {
    this.setCards(nextProps.cards)
  }

  setCards(data) {
    const cards = []
    let icons = []
    data.forEach((level) => {
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

  processMove(id) {
    if (this.state.locked) return

    const newCardsState = this.state.cards
    newCardsState[id].flipped = true
    this.setState({ flips: this.state.flips + 1 })

    this.playAudio()

    const lastMoveIds = this.state.lastMoveIds
    if (lastMoveIds.length === 0) {
      this.setState({ cards: newCardsState, lastMoveIds: [id], locked: true },
      () => {
        this.setState({ locked: false })
      })
    } else {
      this.setState({ cards: newCardsState, locked: true })
      this.checkMatch(id)
    }
    if (this.gameWon()) {
      this.setState({ timedRunning: false, flipsRunning: false, locked: true, won: true })
    }
  }

  playAudio() {
    debugger
    document.getElementById('audio').play()
  }

  checkMatch(id) {
    const newCardsState = this.state.cards
    let newLastMoveIdsState = this.state.lastMoveIds
    newLastMoveIdsState.push(id)
    const match = this.lastCardMatches(id)

    if (match) {
      newCardsState[id].flipped = true
      if ((this.state.difficulty === 'easy' && newLastMoveIdsState.length === 2) ||
          (this.state.difficulty === 'hard' && newLastMoveIdsState.length === 2) ||
          (this.state.difficulty === 'triples' && newLastMoveIdsState.length === 3)) {
        newLastMoveIdsState.forEach((lastMoveId) => {
          newCardsState[lastMoveId].matched = true
        })
        newLastMoveIdsState = []
      }
      this.setState({ cards: newCardsState, lastMoveIds: newLastMoveIdsState, locked: false })
    } else {
      this.turnOverUnmatchedTiles(newLastMoveIdsState, newCardsState)
    }
  }

  turnOverUnmatchedTiles(newLastMoveIdsState, newCardsState) {
    setTimeout(() => {
      newLastMoveIdsState.forEach((lastMoveId) => {
        newCardsState[lastMoveId].flipped = false
      })
      this.setState({
        cards: newCardsState,
        lastMoveIds: [],
        locked: false })
    }, 500)
  }

  lastCardMatches(id) {
    let match = true
    this.state.lastMoveIds.forEach((moveId) => {
      if (this.state.cards[moveId].icon !== this.state.cards[id].icon) {
        match = false
      }
    })
    return match
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
          id={id}
          icon={card.icon}
          flipped={card.flipped}
          matched={card.matched}
          processMove={this.processMove}
        />
    ) }
    return []
  }

  changeDifficulty(difficulty) {
    this.setState({ difficulty }, () => {
      this.setCards(this.props.cards)
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

  render() {
    const cards = this.makeCards()
    let score
    let start
    let winner

    if (this.state.timedRunning) {
      score = <Timer updateTimer={this.updateTimer} />
    } else if (this.state.flipsRunning) {
      score = <h3>{this.state.flips}</h3>
    } else {
      start =
      (<Start
        startTimedGame={this.startTimedGame}
        startFlipsGame={this.startFlipsGame}
        changeDifficulty={this.changeDifficulty}
      />)
    }

    if (this.state.won) {
      winner = <Winner elapsedTime={this.state.elapsedTime} />
    }

    return (
      <div>
        <h1 className={styles.header}>Memory Game</h1>
        {score}

        <div className={styles.content}>
          {start}
          {winner}
          <div className={styles.gamearea}>
            {cards}
          </div>
        </div>
        <audio id="audio" className={styles.flipSound}>
          <source src="../../assets/card_flip.wav" type="audio/wav" />
        </audio>

      </div>
    )
  }
}

Game.propTypes = {
  cards: React.PropTypes.array.isRequired,
  requestCards: React.PropTypes.func.isRequired,
  requestTriples: React.PropTypes.func.isRequired,
}
