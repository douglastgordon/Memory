import React from 'react'
// import styles from './start.scss'

export default class Start extends React.Component {

  constructor(props) {
    super(props)
    this.selectDifficulty = this.selectDifficulty.bind(this)
    this.selectMode = this.selectMode.bind(this)
    this.startGame = this.startGame.bind(this)
    this.state = {
      difficulty: 'easy',
      mode: 'timedGame',
    }
  }

  selectDifficulty(difficulty) {
    if (this.state.difficulty === difficulty) {
      return
    }
    this.setState({ difficulty })
    this.props.changeDifficulty(difficulty)
  }

  selectMode(mode) {
    if (this.state.mode === mode) {
      return
    }
    this.setState({ mode })
  }

  startGame() {
    if (this.state.mode === 'timedGame') {
      this.props.startTimedGame()
    } else {
      this.props.startFlipsGame()
    }
  }

  render() {
    let easySelected = ''
    let hardSelected = ''
    let triplesSelected = ''
    if (this.state.difficulty === 'easy') {
      easySelected = "selected"
    } else if (this.state.difficulty === 'hard') {
      hardSelected = "selected"
    } else {
      triplesSelected = "selected"
    }

    let timedSelected = ''
    let flipSelected = ''
    if (this.state.mode === 'timedGame') {
      timedSelected = "selected"
    } else {
      flipSelected = "selected"
    }
    return (
      <div className="container">

        <div className="stButttonContainer">
          <div
            className={`easy ${easySelected}`}
            onClick={() => this.selectDifficulty('easy')}
          >
            Easy
          </div>
          <div
            className={`hard ${hardSelected}`}
            onClick={() => this.selectDifficulty('hard')}
          >
            Hard
          </div>
          <div
            className={`triples ${triplesSelected}`}
            onClick={() => this.selectDifficulty('triples')}
          >
            Triples
          </div>
        </div>

        <div className="stButttonContainer">
          <div
            className={`timedGame ${timedSelected}`}
            onClick={() => this.selectMode('timedGame')}
          >
            Timed Game
            <i className="material-icons">alarm</i>
          </div>
          <div
            className={`flipGame ${flipSelected}`}
            onClick={() => this.selectMode('flipsGame')}
          >
            Fewest Flips
            <i className="material-icons">extension</i>
          </div>
        </div>

        <div className="stButttonContainer">
          <div className="begin" onClick={this.startGame}>
            Begin
          </div>
        </div>

      </div>
    )
  }
}

Start.propTypes = {
  startTimedGame: React.PropTypes.func,
  startFlipsGame: React.PropTypes.func,
  changeDifficulty: React.PropTypes.func,
  runAI: React.PropTypes.func,
}

//
//  <div onClick={this.props.runAI}>
// //   Run AI
// // </div>
