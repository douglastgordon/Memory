import React from 'react'
// import styles from './swatch_selector.scss'
// import swatches from '../../assets/swatches.scss'

export default class SwatchSelector extends React.Component {

  render() {
    let barberSelect
    let blackAndWhiteSelect
    let bullseyeSelect
    let autumnSelect
    let mellowSelect
    //
    switch (this.props.swatch) {
      case 'barber':
        barberSelect = "swatchSelect"
        break
      case 'blackAndWhite':
        blackAndWhiteSelect = "swatchSelect"
        break
      case 'bullseye':
        bullseyeSelect = "swatchSelect"
        break
      case 'autumn':
        autumnSelect = "swatchSelect"
        break
      case 'mellow':
        mellowSelect = "swatchSelect"
        break
      default:
        barberSelect = "swatchSelect"
        break
    }

    return (
      <div
        id="0"
        className="swaButtonContainer"
        onClick={(e) => { this.props.changeSwatch(e) }}
      >
        <div
          className={`swatch barber ${barberSelect}`}
          id="barber"
        />
        <div
          className={`swatch blackAndWhite ${blackAndWhiteSelect}`}
          id="blackAndWhite"
        />
        <div
          className={`swatch bullseye ${bullseyeSelect}`}
          id="bullseye"
        />
        <div
          className={`swatch autumn ${autumnSelect}`}
          id="autumn"
        />
        <div
          className={`swatch mellow ${mellowSelect}`}
          id="mellow"
        />
      </div>
    )
  }
}

SwatchSelector.propTypes = {
  changeSwatch: React.PropTypes.func,
  swatch: React.PropTypes.string,
}
