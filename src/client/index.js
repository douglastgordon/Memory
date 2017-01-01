/* eslint-env browser */

// Kyt expects every app to have this entry point.
// You probably won't need to touch this file.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './../components/App'

import configureStore from '../store/store'

//  testing
// import { receiveCards } from '../actions/card_actions'
//
// window.receiveCards = receiveCards()
//
// window.store = configureStore()
window.cardSound = new Audio('../../assets/card_flip.wav')
// end of testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<App store={store} />, root)
})
