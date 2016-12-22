import React from 'react'
import styles from './Game.scss'


export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this)
    this.state = {
      flipped: false,
    }
  }

  flip() {
    if (!this.state.flipped) {
      this.setState({ flipped: true })
    }
  }

  render() {
    let icon
    if (this.state.flipped) {
      icon = this.props.icon
    }
    return (
      <div className={styles.card} onClick={this.flip}>
        <p>{icon}</p>
      </div>
    )
  }
}

Card.propTypes = {
  key: React.PropTypes.number.isRequired,
  icon: React.PropTypes.string.isRequired,
}
