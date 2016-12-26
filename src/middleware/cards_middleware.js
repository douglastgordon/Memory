import { getCards, getTriples } from '../util/game_api_util'
import {
  receiveCards,
  REQUEST_CARDS,
  receiveTriples,
  REQUEST_TRIPLES,
} from '../actions/card_actions'

const cardsMiddleware = ({ getState, dispatch }) => next => (action) => {
  let success
  switch (action.type) {
    case REQUEST_CARDS:
      success = data => dispatch(receiveCards(data))
      getCards(success)
      return next(action)
    case REQUEST_TRIPLES:
      success = data => dispatch(receiveTriples(data))
      getTriples(success)
      return next(action)
    default:
      return next(action)
  }
}

export default cardsMiddleware
