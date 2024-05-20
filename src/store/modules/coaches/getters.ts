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
  },
  shouldUpdate(state: CoachState) {
    const lastFetch = state.lastFetch
    if (!lastFetch) {
      return true
    }
    const currentTime = new Date().getTime()
    return (currentTime - lastFetch) / 1000 > 60
  }
}
