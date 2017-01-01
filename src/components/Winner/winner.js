import React from 'react'
import styles from './winner.scss'

export default class Winner extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.winContainer}>
        <h2>You Win!</h2>
        <p>{this.props.elapsedTime}</p>
      </div>
    )
  }

}

Winner.propTypes = {
  elapsedTime: React.PropTypes.number,
}
