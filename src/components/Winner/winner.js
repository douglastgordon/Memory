import React from 'react'
// import styles from './winner.scss'

export default class Winner extends React.Component {

  render() {
    let message
    let mode
    if (this.props.elapsedTime > 0) {
      message = (
        <p>
          You completed memory on {this.props.difficulty} mode in {this.props.elapsedTime} seconds
        </p>
      )
      mode = 'timed'
    } else {
      message = (
        <p>
          You completed {this.props.difficulty} mode in {this.props.flips} flips
        </p>
      )
      mode = 'flips'
    }

    return (
      <div className="winContainer">
        <h2>Success!</h2>
        {message}
        <div className="winButtonContainer">
          <div className="settings" onClick={this.props.settings}>
            Settings
          </div>
          <div className="playAgain" onClick={() => { this.props.playAgain(mode) }}>
            Play Again
          </div>
        </div>
      </div>
    )
  }

}

Winner.propTypes = {
  elapsedTime: React.PropTypes.number,
  flips: React.PropTypes.number,
  difficulty: React.PropTypes.string,
  playAgain: React.PropTypes.func,
  settings: React.PropTypes.func,
}
