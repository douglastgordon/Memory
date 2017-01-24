import React from 'react'
// import styles from './card.scss'
// import swatches from '../../assets/swatches.scss'

export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.flip = this.flip.bind(this)
  }

  flip(e) {
    this.props.processMove(e.currentTarget.id)
  }

  render() {
    const clicked = this.props.flipped ? "clicked" : ''

    // let swatch
    // switch (this.props.swatch) {
    //   case 'barber':
    //     swatch = "barber"
    //     break
    //   case 'blackAndWhite':
    //     swatch = "blackAndWhite"
    //     break
    //   case 'bullseye':
    //     swatch = "bullseye"
    //     break
    //   case 'autumn':
    //     swatch = "autumn"
    //     break
    //   case 'mellow':
    //     swatch = "mellow"
    //     break
    //   default:
    //     break
    // }

    return (
      <div
        className={`cardContainer ${clicked}`}
        id={this.props.id}
        onClick={this.flip}
      >
        <div className="flipper">
          <div className="front">
            <div className={`design ${this.props.swatch}`} />
          </div>
          <div className="back">
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
