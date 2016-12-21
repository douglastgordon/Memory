import { getCards } from '../util/game_api_util'
import {
  requestCards,
  receiveCards,
  REQUEST_CARDS,
} from '../actions/card_actions'

const cardsMiddleware = ({ getState, dispatch }) => next => (action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      const success = data => dispatch(receiveCards(data))
      getCards(success)
      return next(action)
    default:
      return next(action)
  }
}

export default cardsMiddleware
