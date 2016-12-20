export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

export const requestCards = () => ({
  type: REQUEST_CARDS,
})

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards,
})
