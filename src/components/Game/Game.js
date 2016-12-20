import React from 'react'
import Timer from '../Timer/Timer'
import styles from './Game.scss'


// const Game = () => (
//   <div>
//     <h1 className={styles.header}>NYT Games Code Test</h1>
//     <Timer />
//     <div className={styles.placeholder}>Let the games begin (here).</div>
//   </div>
// )
//
// export default Game

export default class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: Object.keys(this.props.cards),
    }
  }

  componentWillMount() {
    this.props.requestCards()
  }

  render() {
    debugger
    return (
      <div>
        <h1 className={styles.header}>NYT Games Code Test</h1>
        <p>props here: `${Object.keys(this.props.cards)}`</p>
        <Timer />
        <div className={styles.placeholder}>Let the gdfames begin (here).</div>
      </div>
    )
  }
}
