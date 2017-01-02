import React from 'react'
import styles from './swatch_selector.scss'

export default class SwatchSelector extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let barberSelect
    let blackAndWhiteSelect
    let bullseyeSelect
    let autumnSelect
    let mellowSelect

    switch (this.props.swatch) {
      case 'barber':
        barberSelect = styles.swatchSelect
        break
      case 'blackAndWhite':
        blackAndWhiteSelect = styles.swatchSelect
        break
      case 'bullseye':
        bullseyeSelect = styles.swatchSelect
        break
      case 'autumn':
        autumnSelect = styles.swatchSelect
        break
      case 'mellow':
        mellowSelect = styles.swatchSelect
        break
      default:
        barberSelect = styles.swatchSelect
        break
    }

    return (
      <div
        id="0"
        className={styles.butttonContainer}
        onClick={(e) => { this.props.changeSwatch(e) }}
      >
        <div
          className={styles.swatch + ' ' + styles.barber + ' ' + barberSelect}
          id="barber"
        />
        <div
          className={styles.swatch + ' ' + styles.blackAndWhite + ' ' + blackAndWhiteSelect}
          id="blackAndWhite"
        />
        <div
          className={styles.swatch + ' ' + styles.bullseye + ' ' + bullseyeSelect}
          id="bullseye"
        />
        <div
          className={styles.swatch + ' ' + styles.autumn + ' ' + autumnSelect}
          id="autumn"
        />
        <div
          className={styles.swatch + ' ' + styles.mellow + ' ' + mellowSelect}
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
