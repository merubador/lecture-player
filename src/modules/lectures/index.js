export { default } from './duck'
export * from './duck'

export { default as lecturesSaga } from './sagas'

import * as _LecturesManager from './LecturesManager'
export const LecturesManager = _LecturesManager
