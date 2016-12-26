import { connect } from 'react-redux'
import Game from './game'
import { requestCards, requestTriples } from '../../actions/card_actions'

const mapStateToProps = state => ({
  cards: state.cards,
})

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards()),
  requestTriples: () => dispatch(requestTriples()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
