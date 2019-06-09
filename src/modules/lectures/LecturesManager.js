import Api from '../../Api'
import * as R from 'ramda'
import { handleStatuses, pipeP } from '../../utils'

export const getLectures = pipeP(
  (offset, limit) => {
    return fetch(`${Api.GET_LECTURES}?offset=0&limit=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  handleStatuses(),
  x => x.json(),
  R.prop('data'),
)
