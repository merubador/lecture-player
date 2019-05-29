import {
  withNavigate,
  withNavigateGoBack as navigateGoBackHoc,
} from '../../utils/withNavigate'
import { NAVIGATORS } from '../../constants'

export const withNavigateGoBack = navigateGoBackHoc('navigateGoBack', true)

export const withNavigateLectures = withNavigate(
  'navigateLectures',
  `${NAVIGATORS.MAIN}/lectures`,
)

export const withNavigatePlayer = withNavigate(
  'navigatePlayer',
  `${NAVIGATORS.MAIN}/player`,
)
