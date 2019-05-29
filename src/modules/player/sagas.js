import * as R from 'ramda'
import { call, put, takeLatest } from 'redux-saga/effects'
import { playLecture } from './duck'
import { navigate } from '../navigation'
import { NAVIGATORS } from '../../constants'

const playLectureSaga = function*() {
  yield put(navigate(NAVIGATORS.PLAYER))
}

const playerSaga = function*() {
  yield takeLatest(playLecture, playLectureSaga)
}

export default playerSaga
