import { MODULES } from '../../constants'
import { createAction } from 'redux-actions'

export const navigate = createAction(`${MODULES.NAVIGATION}/NAVIGATE`)
