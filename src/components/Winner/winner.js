import React from 'react'

export default class Winner extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>You Win!</h2>
        <p>{this.props.elapsedTime}</p>
      </div>
    )
  }

}

Winner.propTypes = {
  elapsedTime: React.PropTypes.number,
}
