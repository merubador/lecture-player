import { takeLatest } from 'redux-saga/effects'
import { call } from 'redux-saga'
import * as LecturesManager from './LecturesManager'
import { fetchLecturesRequest } from './duck'

const fetchLecturesSaga = function*() {
  const lectures = yield call(LecturesManager.getLectures)

  yield delay(1000)

  console.log(lectures, 'lectures')
}

const lecturesSaga = function*() {
  yield takeLatest(fetchLecturesRequest, fetchLecturesSaga)
}

export default lecturesSaga
