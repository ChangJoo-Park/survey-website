import axios from 'axios'

export const state = () => ({
  accessToken: null,
  user: null,
  surveys: []
})

export const mutations = {
  SET_ACCESSTOKEN (state, newToken) {
    state.accessToken = newToken
  },
  SET_USER (state, newUser) {
    state.user = newUser
  },
  SET_SURVEYS (state, newSurveys) {
    state.surveys = newSurveys
  },
  SET_SURVEY_PARTICIPATIONS (state, payload) {
    const index = state.surveys.findIndex(s => s._id === payload.survey)
    state.surveys[index].participantsCount = payload.participantsCount
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
  },
  setSurveys ({ commit }, surveys) {
    commit('SET_SURVEYS', surveys)
  },
  setSurveyParticipations({ commit }, payload) {
    commit('SET_SURVEY_PARTICIPATIONS', payload)
  }
}

export const getters = {
  loggedInUser: (state) => state.user,
  published: (state) => state.surveys.filter(s => s.published),
  draft: (state) => state.surveys.filter(s => !s.published)
}