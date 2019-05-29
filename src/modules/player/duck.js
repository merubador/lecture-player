import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const prefix = 'PLAYER'

const getPlayer = R.prop('player')

export const playLecture = createAction(`${prefix}/PLAY_LECTURE`)
export const puseLecture = createAction(`${prefix}/PAUSE_LECTURE`)
export const resumeLecture = createAction(`${prefix}/RESUME_LECTURE`)

const currentLecture = handleActions(
  {
    [playLecture]: (_, { payload: lecture }) => lecture,
  },
  '',
)

const status = handleActions(
  {
    [playLecture]: R.always('playing'),
    [resumeLecture]: R.always('playing'),
    [puseLecture]: R.always('stop'),
  },
  'stop',
)

export const getCurrentLecture = R.pipe(
  getPlayer,
  R.prop('currentLecture'),
)

export const getPlayerStatus = R.pipe(
  getPlayer,
  R.prop('status'),
)

const player = combineReducers({ currentLecture, status })

export default player
