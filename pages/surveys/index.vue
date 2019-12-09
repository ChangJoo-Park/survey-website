<template>
  <div>
    <h1>인덱스</h1>
    <div>
      <ul>
        <li v-for="survey in publicSurveys" :key="survey._id">
          {{ survey._id }} - {{ survey.title }} <button @click="remove(survey._id)">X</button>
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <ul>
        <nuxt-link
          v-for="survey in privateSurveys"
          :key="survey._id"
          tag="li"
          :to="{ name: 'surveys-id', params: { id: survey._id } }"
        >
          {{ survey._id }} - {{ survey.title }}  :: {{ survey.author }} <button @click="remove(survey._id)">X</button>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'Vuex'

export default {
  async asyncData ({app, query, req}) {
    const response = await Promise.all([app.$axios({
      url: 'http://localhost:3000/api/me',
    }), app.$axios({
      url: 'http://localhost:3000/api/surveys/public'
    }), app.$axios({
      url: 'http://localhost:3000/api/surveys/private',
    })])

    const user = response[0].data
    const publicSurveys = response[1].data
    const privateSurveys = response[2].data
    return { user, publicSurveys, privateSurveys }
  },
  computed: {
    ...mapGetters(['loggedInUser']),
    loggedIn () {
      return !!this.user
    }
  },
  methods: {
    async remove(id) {
      const response = await this.$axios({ url: `http://localhost:3000/api/surveys/${id}`, method: 'DELETE' })
    }
  }
}
</script>

<style>

</style>