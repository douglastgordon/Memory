import { RECEIVE_CARDS } from '../actions/card_actions'

const cardsReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards
    default:
      return state
  }
}

export default cardsReducer
