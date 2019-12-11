<template>
  <div class="container mx-auto mt-4 px-4">
    <div class="mb-8">
      <h1 class="text-4xl text-bold border-b border-black mb-4">시작한 설문</h1>
      <div class="flex flex-wrap">
        <survey-item
          v-for="survey in published"
          :key="survey._id"
          :survey="survey"
          style="min-width: 250px;"
        />
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-4xl text-bold border-b border-black mb-4">수정 중인 설문</h1>
      <div class="flex flex-wrap">
        <survey-item
          v-for="survey in draft"
          :key="survey._id"
          :survey="survey"
          style="min-width: 250px;"
        />
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-4xl text-bold border-b border-black mb-4">종료된 설문</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'Vuex'
import SurveyItem from '~/components/survey-item'
import { getUnixTime, parseISO } from 'date-fns'

export default {
  components: {
    SurveyItem
  },
  async asyncData ({app, query, req, store}) {
    // TODO: Change to one call for surveys
    const response = await Promise.all([app.$axios({
      url: '/me',
    }), app.$axios({
      url: '/surveys/published'
    }), app.$axios({
      url: '/surveys/draft',
    })])

    const user = response[0].data
    const published = response[1].data
    const draft = response[2].data

    app.store.dispatch('setSurveys', [...published, ...draft])

    return { user }
  },
  computed: {
    ...mapGetters(['loggedInUser', 'published', 'draft']),
    loggedIn () {
      return !!this.user
    }
  },
  methods: {
    ...mapActions(['setSurveys']),
    async remove(id) {
      const response = await this.$axios({ url: `/surveys/${id}`, method: 'DELETE' })
    },
    sortByCreatedAt(a,b) {
      return getUnixTime(parseISO(b.createdAt)) - getUnixTime(parseISO(a.createdAt))
    }
  }
}
</script>

<style>

</style>