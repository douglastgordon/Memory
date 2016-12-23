import React from 'react'
import styles from './card.scss'

export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this)
  }

  flip(e) {
    this.props.processMove(e.target.id)
  }

  render() {
    const icon = this.props.flipped ? this.props.icon : ''
    return (
      <div className={styles.card} id={this.props.id} onClick={this.flip}>
        <p>{icon}</p>
      </div>
    )
  }
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  icon: React.PropTypes.string.isRequired,
  processMove: React.PropTypes.func.isRequired,
  flipped: React.PropTypes.bool.isRequired,
}
