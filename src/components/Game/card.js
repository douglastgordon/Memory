import React from 'react'

export default class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flipped: false,
    }
  }

  handleClick() {
    
  }

  render() {
    return (
      <div onClick={this.handleClick} className="card" id={this.props.key}>{this.props.img}</div>
    )
  }
}

Card.propTypes = {
  key: React.PropTypes.number.isRequired,
  img: React.PropTypes.string.isRequired,

}
