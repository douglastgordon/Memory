import { connect } from 'react-redux'
import Game from './game'
import { requestCards } from '../../actions/card_actions'

const mapStateToProps = state => ({
  cards: state.cards,
})

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
