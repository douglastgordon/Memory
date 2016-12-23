import React from 'react'
import styles from './start.scss'

export default class Start extends React.Component {

  constructor(props) {
    super(props)
  }




  render() {
    return (
      <div className={styles.container}>
      <div className={styles.difficulty}>
        <div className={styles.easy} onClick={() => this.props.changeDifficulty('easy')}>
          Easy
        </div>
        <div className={styles.hard} onClick={() => this.props.changeDifficulty('hard')}>
          Hard
        </div>
      </div>
        <div onClick={this.props.startTimedGame}>Timed Game</div>
      </div>
    )
  }
}

Start.propTypes = {
  startTimedGame: React.PropTypes.func,
  changeDifficulty: React.PropTypes.func,
}
