import Api from '../../Api'
import * as R from 'ramda'
import { pipeP } from '../../utils'

const lectureMock = [
  {
    id: 1,
    name: 'lecture 1',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/track.mp3',
    duration: 111,
  },
  {
    id: 2,
    name: 'lecture 2',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/track.mp3',
    duration: 111,
  },
  {
    id: 3,
    name: 'lecture 3',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/track.mp3',
    duration: 111,
  },
  {
    id: 4,
    name: 'lecture 4',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/track.mp3',
    duration: 111,
  },

  {
    id: 5,
    name: 'lecture 5',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/track.mp3',
    duration: 111,
  },
  {
    id: 6,
    name: 'video',
    uri: '/Users/yaroslav/github/lecture-player/src/assets/video.mp4',
    duration: 6,
  },
]

// export const getLectures = pipeP(
// () => {
//   return fetch(Api.GET_LECTURES, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// },
// handleStatuses(),
// x => x.json(),
// R.prop('data'),
// )

export const getLectures = () => lectureMock
