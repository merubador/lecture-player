import { takeLatest, call } from 'redux-saga/effects'
import { navigate } from './duck'
import { NavigationActions } from 'react-navigation'

export let navigator

export const setNavigator = x => (navigator = x)

const navigateSaga = function*({ payload: routeName }) {
  yield call(
    navigator.dispatch,
    NavigationActions.navigate({ routeName: routeName.toString() }),
  )
}

const navigationSaga = function*() {
  yield takeLatest(navigate, navigateSaga)
}

export default navigationSaga
