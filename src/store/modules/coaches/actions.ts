import type { CoachPayload } from './types'

export default {
  registerCoach(context: any, payload: CoachPayload) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate
    }

    context.commit('registerCoach', coachData)
  }
}
