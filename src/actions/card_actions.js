export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const REQUEST_TRIPLES = 'REQUEST_TRIPLES'
export const RECEIVE_TRIPLES = 'RECEIVE_TRIPLES'

export const requestCards = () => ({
  type: REQUEST_CARDS,
})

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards,
})

export const requestTriples = () => ({
  type: REQUEST_TRIPLES,
})

export const receiveTriples = cards => ({
  type: RECEIVE_TRIPLES,
  cards,
})
