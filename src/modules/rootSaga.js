import { all } from 'redux-saga/effects'
import { navigationSaga } from './navigation'
import { handleErrors } from '../aspects'
import { lecturesSaga } from './lectures'

const handleErrorsWithOptions = saga =>
  handleErrors({
    anyError: function*() {
      // eslint-disable-next-line
      console.warn('restart anyError')
      yield all([handleErrorsWithOptions(saga)])
    },
  })(saga)()

const rootSaga = function*() {
  yield all([
    handleErrorsWithOptions(navigationSaga),
    handleErrorsWithOptions(lecturesSaga),
  ])
}

export default rootSaga
