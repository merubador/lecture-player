import { all } from 'redux-saga/effects'
//TODO: navigation
// import { navigationSaga } from './navigation'
import { handleErrors } from '../aspects'
import { lectureSaga } from './lectures'

const handleErrorsWithOptions = saga =>
  handleErrors({
    anyError: function*() {
      // eslint-disable-next-line
      console.warn('restart anyError')
      yield all([handleErrorsWithOptions(saga)])
    },
  })(saga)()

const rootSaga = function*() {
  yield all([handleErrorsWithOptions(lectureSaga)])
}

export default rootSaga
