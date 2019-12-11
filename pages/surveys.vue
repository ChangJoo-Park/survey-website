<template>
  <div class="">
    <div class="bg-black">
      <div class="flex items-center px-4 container mx-auto" style="height: 3rem;">
        <div class="flex-1">
          <nuxt-link :to="{ name: 'index' }" class="text-white font-mono mr-8">MoleculeSurvey</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys' }" class="nav--link">대시보드</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys-create' }" class="nav--link">새 설문 만들기</nuxt-link>&nbsp;
        </div>
        <div>
          <nuxt-link :to="{ name: 'surveys-me' }" class="nav--link">{{ loggedInUser.username }}</nuxt-link>&nbsp;
          <button @click="signout" class="nav--link">로그아웃</button>
        </div>
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'Vuex';

export default {
  data () {
    return {
      socket: null
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
  methods: {
    ...mapActions(['setUser', 'setAccessToken', 'setSurveyParticipations']),
    signout () {
      this.setAccessToken(null)
      this.setUser(null)
      this.$cookies.remove('access_token')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style>

</style>