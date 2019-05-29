import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const prefix = 'LECTURES'

const getLectures = R.prop('lectures')

export const fetchLecturesRequest = createAction(
  `${prefix}/FETCH_LECTURES_REQUEST`,
)
export const fetchLecturesSuccess = createAction(
  `${prefix}/FETCH_LECTURES_SUCCESS`,
)

const lectureByIds = handleActions(
  {
    [fetchLecturesSuccess]: (_, { payload: lectures }) =>
      R.indexBy(R.prop('id'), lectures),
  },
  {},
)

const lectureAllIds = handleActions(
  {
    [fetchLecturesSuccess]: (_, { payload: lectures }) =>
      R.map(lecture => R.prop('id', lecture))(lectures),
  },
  [],
)

export const getLectureByIds = R.pipe(
  getLectures,
  R.prop('lectureByIds'),
)

export const getLectureList = R.pipe(
  getLectureByIds,
  R.values,
)

const lectures = combineReducers({ lectureAllIds, lectureByIds })

export default lectures
