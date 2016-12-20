import { createStore } from 'redux'
import rootReducer from '../reducers/root_reducer'
import rootMiddleware from '../middleware/root_middleware'

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    rootMiddleware,
  )
)

export default configureStore
