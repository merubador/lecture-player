import Api from '../../Api'
import * as R from 'ramda'
import { handleStatuses, pipeP } from '../../utils'

const lectureMock = [
  {
    id: 1,
    name: 'lecture 1',
    uri: 'uriuriuriuriuriuriuriuri',
  },
  {
    id: 2,
    name: 'lecture 2',
    uri: 'uiuiuiuiuiuiuiuiui',
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
