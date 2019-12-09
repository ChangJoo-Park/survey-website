<template>
  <div class="container mx-auto mt-4 px-4">
    <div class="mb-8">
      <h1 class="text-4xl text-bold border-b border-black mb-4">공개설문</h1>
      <ul class="flex flex-wrap">
        <nuxt-link
          v-for="survey in publicSurveys"
          :key="survey._id"
          tag="li"
          :to="{ name: 'surveys-id', params: { id: survey._id } }"
          class="border border-gray-700 rounded cursor-pointer hover:bg-black hover:text-white"
        >
          <div class="px-4 py-2">
            <div class="text-xl">{{ survey.title }}</div>
            <div class="">{{ survey.description }}</div>
          </div>
          <div class="py-2 px-4">
            <span class="text-sm">{{ survey.questions.length }}개 질문</span>&nbsp;/&nbsp;
            <span class="text-sm">{{ survey.participantsCount }}회 참여</span>
          </div>
        </nuxt-link>
      </ul>
    </div>
    <div>
      <h1 class="text-4xl text-bold border-b border-black mb-2">비공개설문</h1>
      <ul class="flex flex-wrap">
        <nuxt-link
          v-for="survey in privateSurveys"
          :key="survey._id"
          tag="li"
          :to="{ name: 'surveys-id', params: { id: survey._id } }"
          class="border border-gray-700 rounded cursor-pointer hover:bg-black hover:text-white"
        >
          <div class="px-4 py-2">
            <div class="text-xl">{{ survey.title }}</div>
            <div class="">{{ survey.description }}</div>
          </div>
          <div class="py-2 px-4">
            <span class="text-sm">{{ survey.questions.length }}개 질문</span>&nbsp;/&nbsp;
            <span class="text-sm">{{ survey.participantsCount }}회 참여</span>
          </div>
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
      url: '/me',
    }), app.$axios({
      url: '/surveys/public'
    }), app.$axios({
      url: '/surveys/private',
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
      const response = await this.$axios({ url: `/surveys/${id}`, method: 'DELETE' })
    }
  }
}
</script>

<style>

</style>