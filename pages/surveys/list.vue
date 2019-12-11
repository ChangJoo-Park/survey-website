<template>
  <div class="container mx-auto mt-4 px-4">
    <div class="mb-8 px-2">
      <h1 class="text-4xl text-bold border-b border-black mb-4">진행중인 설문</h1>
      <div class="flex flex-wrap -mx-2 overflow-hidden">
        <div
          v-for="survey in published"
          :key="survey._id"
          class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden"
        >
          <survey-item :survey="survey" />
        </div>
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-4xl text-bold border-b border-black mb-4">수정중인 설문</h1>
      <div class="flex flex-wrap -mx-2 overflow-hidden">
        <div
          v-for="survey in draft"
          :key="survey._id"
          class="w-full md:w-1/2 lg:w-1/3 px-2 overflow-hidden"
        >
          <survey-item :survey="survey" />
        </div>
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
    const { data: surveys } = await app.$axios({ url: '/me/surveys' })
    app.store.dispatch('setSurveys', surveys)
    return {}
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