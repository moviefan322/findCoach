export interface CoachState {
  coaches: Coach[]
}

export interface Coach {
  id: string
  firstName: string
  lastName: string
  areas: string[]
  description: string
  hourlyRate: number
}
export interface CoachPayload {
  first: string
  last: string
  areas: string[]
  desc: string
  rate: number
}