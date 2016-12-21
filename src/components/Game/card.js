import React from 'react'
import styles from './Game.scss'


export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      flipped: false,
    }
  }

  handleClick() {
    if (!this.state.flipped) {
      this.setState({ flipped: true })
    }
  }

  render() {
    let icon
    if (this.state.flipped){
      icon = this.props.img
    }
    return (
      <div onClick={this.handleClick} className={styles.card} id={this.props.key}>
        <p>{icon}</p>
      </div>
    )
  }
}

Card.propTypes = {
  key: React.PropTypes.number.isRequired,
  img: React.PropTypes.string.isRequired,
}
