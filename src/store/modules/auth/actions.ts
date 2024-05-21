let timer: any;

export default {
  async login(context: any, payload: any) {
    return context.dispatch('auth', { ...payload, mode: 'login' })
  },
  async signup(context: any, payload: any) {
    return context.dispatch('auth', { ...payload, mode: 'signup' })
  },
  async auth(context: any, payload: any) {
    const mode = payload.mode
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY}`
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_API_KEY}`
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      )
      throw error
    }

    const expiresIn = +responseData.expiresIn * 1000
    const expirationDate = (new Date().getTime() + expiresIn).toString()

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.userId)
    localStorage.setItem('tokenExpiration', expirationDate)

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    })
  },
  tryLogin(context: any) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration! - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  },
  logout(context: any) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null
    })
  },
  autoLogout(context: any) {
    context.dispatch('logout');
    context.commit('setAutoLogout')
  }
}
