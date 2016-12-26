import React from 'react'
import styles from './start.scss'

export default class Start extends React.Component {

  constructor(props) {
    super(props)
    this.selectDifficulty = this.selectDifficulty.bind(this)
    this.state = {
      difficulty: 'easy',
    }
  }

  selectDifficulty(difficulty) {
    if (this.state.difficulty === difficulty) {
      return
    }
    this.setState({ difficulty })
    this.props.changeDifficulty(difficulty)
  }

  render() {
    let easySelected = ''
    let hardSelected = ''
    if (this.state.difficulty === 'easy') {
      easySelected = styles.selected
    } else {
      hardSelected = styles.selected
    }

    return (
      <div className={styles.container}>
        <div className={styles.butttonContainer}>
          <div className={styles.easy + ' ' + easySelected} onClick={() => this.selectDifficulty('easy')}>
            Easy
          </div>
          <div className={styles.hard + ' ' + hardSelected} onClick={() => this.selectDifficulty('hard')}>
            Hard
          </div>
          <div className={styles.hard + ' ' + hardSelected} onClick={() => this.selectDifficulty('triples')}>
            Triples
          </div>
        </div>
        <div className={styles.butttonContainer}>
          <div className={styles.timedGame} onClick={this.props.startTimedGame}>
            Timed Game
          </div>
          <div className={styles.timedGame} onClick={this.props.startFlipsGame}>
            Fewest Flips
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

}
