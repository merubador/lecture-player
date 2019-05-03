import { takeLatest } from 'redux-saga/effects'
import { fetchLectures } from './duck'

const fetchLecturesSaga = function*() {
  //
}

const lecturesSaga = function*() {
  yield takeLatest(fetchLectures, fetchLecturesSaga)
}

export default lecturesSaga
