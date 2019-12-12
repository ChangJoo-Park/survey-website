<template>
  <div>
    <div class="bg-black sticky">
      <div class="flex items-center px-4 container mx-auto" style="height: 3rem;">
        <div class="flex-1">
          <nuxt-link :to="{ name: 'index' }" class="text-white font-mono mr-8">Survey</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys' }" class="nav--link">대시보드</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys-list' }" class="nav--link">설문현황</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys-create' }" class="nav--link">설문만들기</nuxt-link>&nbsp;
        </div>
        <div class="flex items-center">
          <form class="" @submit.prevent="search">
            <input type="search" class="search--input" placeholder="설문을 찾아보세요" v-model="searchTerm">
          </form>
          <nuxt-link :to="{ name: 'surveys-me' }" class="nav--link">{{ loggedInUser.username }}</nuxt-link>&nbsp;
          <button @click="signout" class="nav--link">로그아웃</button>
        </div>
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  async asyncData ({ app, query, req, params, route }) {
    if (route.name === 'surveys-search' && query.term) {
      return { searchTerm: query.term }
    }
    return { searchTerm: '' }
  },
  data () {
    return {
      socket: null,
      searchTerm: ''
    }
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  mounted () {
    this.socket = this.$nuxtSocket({ reconnection: true })

    this.socket.on(`author/${this.loggedInUser._id}`, ({ sender, event, payload }) => {
      if (payload.event === 'PARTICIPATION_CREATED') {
        this.setSurveyParticipations(payload)
      }
    })
  },
  beforeDestroy () {
    this.socket.close()
    this.socket = null
  },
  methods: {
    ...mapActions(['setUser', 'setAccessToken', 'setSurveyParticipations']),
    signout () {
      this.setAccessToken(null)
      this.setUser(null)
      this.$cookies.remove('access_token')
      this.$router.push({ name: 'index' })
    },
    search () {
      this.$router.push({
        name: 'surveys-search',
        query: { term: this.searchTerm }
      })
    }
  }
}
</script>

<style>

</style>