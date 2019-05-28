import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const prefix = 'LECTURES'

const getLectures = R.pipe(R.prop('lectures'))

export const fetchLecturesRequest = createAction(
  `${prefix}/FETCH_LECTURES_REQUEST`,
)
export const fetchLecturesSuccess = createAction(
  `${prefix}/FETCH_LECTURES_SUCCESS`,
)

const lectureByIds = handleActions(
  {
    [fetchLecturesSuccess]: (_, { payload }) => payload,
  },
  {},
)

const lectureAllIds = handleActions(
  {
    [fetchLecturesSuccess]: (_, { payload }) => payload,
  },
  [],
)

export const getLectureByIds = R.pipe(
  getLectures,
  R.prop('getLectureByIds'),
)

export const getLectureList = R.pipe(
  getLectureByIds,
  R.values,
)

const lectures = combineReducers({ lectureByIds, lectureAllIds })

export default lectures
