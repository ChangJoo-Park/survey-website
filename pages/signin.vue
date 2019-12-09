<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <input type="email" v-model="user.email" class="border">
      </div>
      <div>
        <input type="password" v-model="user.password" class="border">
      </div>
      <div>
        <input type="submit">
      </div>
    </form>
    {{ user }}
  </div>
</template>

<script>
import { mapActions } from 'Vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['setAccessToken', 'setUser']),
    async submit() {
      const { data: { user } } = await this.$axios({
        method: 'POST',
        url: 'http://localhost:3000/api/users/signin',
        data: {
          user: this.user
        }
      })
      this.$cookies.set('access_token', user.token)
      this.setAccessToken(user.token)
      delete user.token
      this.setUser(user)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>