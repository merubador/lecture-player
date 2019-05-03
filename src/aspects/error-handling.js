import { createExtendableBuiltin } from '../utils'
import * as R from 'ramda'
import { call, put } from 'redux-saga/effects'

const generator = function*() {}
const GeneratorFunction = generator.constructor

export class RequestError extends createExtendableBuiltin(Error) {
  constructor(message, status, error) {
    super(message)
    this.status = status
    this.error = error
    this.name = this.constructor.name
  }
}

export const handleStatuses = ({ shouldParseJson } = {}) => res => {
  if (200 <= res.status && res.status < 300) {
    return Promise.resolve(res)
  }

  if (
    !shouldParseJson ||
    (shouldParseJson !== true && !R.contains(res.status, shouldParseJson))
  ) {
    return Promise.reject(new RequestError('Request Error', res.status))
  }

  return res
    .json()
    .then(x => Promise.reject(new RequestError('Request Error', res.status, x)))
}

export const handleErrors = ({
  anyError,
  anyErrorFinally,
  networkError,
  ...rest
} = {}) => saga =>
  function*(...args) {
    try {
      yield call(saga, ...args)
    } catch (e) {
      // eslint-disable-next-line
      if (__DEV__) {
        // eslint-disable-next-line
        console.warn('Saga error: ', e)
      }
      if (anyErrorFinally) {
        yield call(runErrorHandler, anyErrorFinally, ...args)
      }

      if (e instanceof RequestError) {
        let shouldReturn = false

        for (const key in rest) {
          const statuses = R.pipe(
            R.split(','),
            R.map(parseInt),
          )(key)

          if (R.contains(e.status, statuses)) {
            yield call(runErrorHandler, rest[key], e.error, ...args)
            shouldReturn = true
          }
        }

        if (shouldReturn) {
          return
        }
      }

      if (e.message.indexOf('Network request failed') !== -1 && networkError) {
        yield call(runErrorHandler, networkError, ...args)
        return
      }

      if (anyError) {
        yield call(runErrorHandler, anyError, ...args)
        return
      }
      throw e
    }
  }

const runErrorHandler = function*(func, ...args) {
  if (func instanceof GeneratorFunction) {
    yield call(func, ...args)
  } else {
    yield put(func(...args))
  }
}
