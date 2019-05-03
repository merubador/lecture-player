import * as R from 'ramda'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import sagaMiddlewareFactory from 'redux-saga'
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'

const sagaMiddleware = sagaMiddlewareFactory()

const middlewares = R.pipe(
  () => [],
  R.append(sagaMiddleware),
  // eslint-disable-next-line
  // R.when(() => __DEV__, R.append(logger)),
)()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)

export default store
