import React from 'react'
import styles from './card.scss'

export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this)
  }

  flip(e) {
    this.props.processMove(e.currentTarget.id)
  }

  render() {
    const clicked = this.props.flipped ? styles.clicked : ''

    let swatch
    switch (this.props.swatch) {
      case 'barber':
        swatch = styles.barber
        break
      case 'blackAndWhite':
        swatch = styles.blackAndWhite
        break
      case 'bullseye':
        swatch = styles.bullseye
        break
      case 'autumn':
        swatch = styles.autumn
        break
      case 'mellow':
        swatch = styles.mellow
        break
      default:
        break
    }

    return (
      <div className={styles.cardContainer + ' ' + clicked} id={this.props.id} onClick={this.flip}>
        <div className={styles.flipper}>
          <div className={styles.front}>
            <div className={styles.design + ' ' + swatch}></div>
          </div>
          <div className={styles.back}>
            <p>{this.props.icon}</p>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  icon: React.PropTypes.string.isRequired,
  processMove: React.PropTypes.func.isRequired,
  flipped: React.PropTypes.bool.isRequired,
  swatch: React.PropTypes.string.isRequired,
}
