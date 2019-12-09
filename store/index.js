import axios from 'axios'

function getCookie (cookieName, stringCookie) {
  let strCookie = new RegExp('' + cookieName + '[^;]+').exec(stringCookie)[0]
  return unescape(strCookie ? strCookie.toString().replace(/^[^=]+./, '') : '')
}

export const state = () => ({
  accessToken: null,
  user: null
})

export const mutations = {
  SET_ACCESSTOKEN (state, newToken) {
    state.accessToken = newToken
  },
  SET_USER (state, newUser) {
    state.user = newUser
  }
}

export const actions = {
  nuxtServerInit ({commit}, {req, res, app}) {
    const accesToken = app.$cookies.get('access_token')
    if (req.headers.cookie && accesToken) {
      return axios({
        method: 'GET',
        url: 'http://localhost:3000/api/me',
        headers: { access_token: accesToken }
      })
      .then(response => {
        const { data } = response
        commit('SET_ACCESSTOKEN', accesToken)
        commit('SET_USER', data)
        return data
      })
    } else {
      return Promise.resolve()
    }
  },
  setAccessToken ({ commit }, newToken)  {
    commit('SET_ACCESSTOKEN', newToken)
  },
  setUser ({ commit }, user)  {
    commit('SET_USER', user)
  }
}

export const getters = {
  loggedInUser: (state) => state.user
}