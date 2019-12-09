<template>
  <div class="">
    <div class="flex items-center px-4 bg-black" style="height: 3rem;">
      <div class="flex-1">
        <nuxt-link :to="{ name: 'index' }" class="text-white font-mono mr-8">MoleculeSurvey</nuxt-link>&nbsp;
        <nuxt-link :to="{ name: 'surveys' }" class="text-white px-2 py-2">대시보드</nuxt-link>&nbsp;
        <nuxt-link :to="{ name: 'surveys-create' }" class="text-white px-2 py-2">새 설문 만들기</nuxt-link>&nbsp;
      </div>
      <div>
        <nuxt-link :to="{ name: 'surveys-me' }" class="text-white px-2 py-2">{{ loggedInUser.username }}</nuxt-link>&nbsp;
        <button @click="signout" class="text-white px-2 py-2">로그아웃</button>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'Vuex';

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    ...mapActions(['setUser', 'setAccessToken']),
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