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
      <div className={styles.butttonContainer}>
        <div
          className={styles.swatch + ' ' + styles.barber + ' ' + barberSelect}
          onClick={() => { this.props.changeSwatch('barber') }}
        />
        <div
          className={styles.swatch + ' ' + styles.blackAndWhite + ' ' + blackAndWhiteSelect}
          onClick={() => { this.props.changeSwatch('blackAndWhite') }}
         />
        <div
          className={styles.swatch + ' ' + styles.bullseye + ' ' + bullseyeSelect}
          onClick={() => { this.props.changeSwatch('bullseye') }}
        />
        <div
          className={styles.swatch + ' ' + styles.autumn + ' ' + autumnSelect}
          onClick={() => { this.props.changeSwatch('autumn') }}
        />
        <div
          className={styles.swatch + ' ' + styles.mellow + ' ' + mellowSelect}
          onClick={() => { this.props.changeSwatch('mellow') }}
        />
      </div>
    )
  }

}

SwatchSelector.propTypes = {
  changeSwatch: React.PropTypes.func,
  swatch: React.PropTypes.string,
}
