<template>
  <div class="">
    <div class="flex items-center px-4" style="height: 3rem;">
      <nuxt-link :to="{ name: 'surveys' }">HOME</nuxt-link>&nbsp;
      <nuxt-link :to="{ name: 'surveys-create' }">NEW SURVEY</nuxt-link>&nbsp;
      <button @click="signout">SignOut</button>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { mapActions } from 'Vuex';

export default {
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