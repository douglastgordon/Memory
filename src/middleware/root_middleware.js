import { applyMiddleware } from 'redux'

import cardsMiddleware from './cards_middleware'

const rootMiddleware = applyMiddleware(
  cardsMiddleware,
)

export default rootMiddleware
