import * as R from 'ramda'
import { call, put, delay, takeLatest } from 'redux-saga/effects'
import * as LecturesManager from './LecturesManager'
import { fetchLecturesRequest, fetchLecturesSuccess } from './duck'
import { navigate } from '../navigation'
import { NAVIGATORS } from '../../constants'

const fetchLecturesSaga = function*() {
  const lectures = yield call(LecturesManager.getLectures)

  yield delay(1000)

  yield put(fetchLecturesSuccess(lectures))
  if (!R.isEmpty(lectures)) {
    yield put(navigate(NAVIGATORS.LECTURES))
  }
}

const lecturesSaga = function*() {
  yield takeLatest(fetchLecturesRequest, fetchLecturesSaga)
}

export default lecturesSaga
