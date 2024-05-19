import type { CoachState } from './types'

export default {
  coaches(state: CoachState) {
    return state.coaches
  },
  hasCoaches(state: CoachState) {
    return state.coaches && state.coaches.length > 0
  }
}
