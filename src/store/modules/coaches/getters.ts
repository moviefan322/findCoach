import type { CoachState, Coach } from './types'

export default {
  coaches(state: CoachState) {
    return state.coaches
  },
  hasCoaches(state: CoachState) {
    return state.coaches && state.coaches.length > 0
  },
  isCoach(_: CoachState, getters: any, _2: any, rootGetters: any) {
    const coaches = getters.coaches
    const userId = rootGetters.userId
    return coaches.some((coach: Coach) => coach.id === userId)
  }
}
