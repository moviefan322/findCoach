import type { CoachPayload } from './types'

export default {
  async registerCoach(context: any, payload: CoachPayload) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate
    }

    const response = await fetch(
      `https://vue-http-fb066-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    )

    // const responseData = await response.json()

    if (!response.ok) {
      // error...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    })
  },
  async loadCoaches(context: any, payload: any) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return
    }

    const response = await fetch(`https://vue-http-fb066-default-rtdb.firebaseio.com/coaches.jso`)
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!')
      throw error
    }

    const coaches = []

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      }
      coaches.push(coach)
    }

    context.commit('setCoaches', coaches)
    context.commit('setFetchTimestamp')
  }
}
