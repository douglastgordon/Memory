import { RECEIVE_CARDS, RECEIVE_TRIPLES } from '../actions/card_actions'

const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      return state.concat(action.cards.levels)
    case RECEIVE_TRIPLES:
      return state.concat(action.cards)
    default:
      return state
  }
}

export default cardsReducer
