import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  state() {
    console.log('VITE_API_KEY:', import.meta.env.VITE_API_KEY);
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      apiKey: import.meta.env.VITE_API_KEY
    }
  },
  mutations,
  actions,
  getters
}
