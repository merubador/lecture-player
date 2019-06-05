import * as R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const prefix = 'PLAYER'

const getPlayer = R.prop('player')

export const playLecture = createAction(`${prefix}/PLAY_LECTURE`)
export const puseLecture = createAction(`${prefix}/PAUSE_LECTURE`)
export const resumeLecture = createAction(`${prefix}/RESUME_LECTURE`)
export const setProgressValue = createAction(`${prefix}/SET_PROGRESS_VALUE`)

const currentLecture = handleActions(
  {
    [playLecture]: (_, { payload: lecture }) => lecture,
  },
  '',
)

const propgressValue = handleActions(
  {
    [setProgressValue]: (_, { payload: lecture }) => lecture,
  },
  0,
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

export const getPropgressValue = R.pipe(
  getPlayer,
  R.prop('propgressValue'),
)

export const getIsAudio = R.pipe(
  getCurrentLecture,
  R.prop('uri'),
  R.split('.'),
  R.last,
  R.equals('mp3'),
)

export const getPlayerStatus = R.pipe(
  getPlayer,
  R.prop('status'),
)

const player = combineReducers({ currentLecture, status, propgressValue })

export default player
