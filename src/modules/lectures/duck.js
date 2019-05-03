import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const prefix = 'LECTURES'

export const fetchLectures = createAction(`${prefix}/FETCH_LECTURES`)

const byIds = handleActions(
  {
    [fetchLectures]: (_, { payload }) => payload,
  },
  {},
)

const allIds = handleActions(
  {
    [fetchLectures]: (_, { payload }) => payload,
  },
  [],
)

const lectures = combineReducers({ byIds, allIds })

export default lectures
