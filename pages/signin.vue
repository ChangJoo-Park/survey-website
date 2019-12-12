<template>
  <div class="w-screen h-screen px-2 flex justify-center items-center">
    <form @submit.prevent="submit" class="max-w-md bg-white" style="min-width: 300px;">
      <h1 class="form--title">로그인</h1>
      <label class="block mt-4">
        <span class="text-gray-700">이메일</span>
        <input id="email" type="email" v-model="user.email" class="form-input w-full" autofocus required>
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">비밀번호</span>
        <input id="password" type="password" v-model="user.password" class="form-input w-full" required>
      </label>

      <div class="mt-4">
        <input type="submit" class="form--button w-full" value="로그인하기">
      </div>
      <div class="mt-4 text-center">
        <nuxt-link class="form--link" :to="{ name: 'signup' }">새 계정 만들기</nuxt-link>
        <br>
        <nuxt-link class="form--link" :to="{ name: 'index' }">첫 페이지로 돌아가기</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
        url: '/users/signin',
        data: {
          user: this.user
        }
      })
      this.$cookies.set('access_token', user.token)
      this.setAccessToken(user.token)
      delete user.token
      this.setUser(user)
      this.$router.push({ name: 'surveys' })
    }
  }
}
</script>

<style>

</style>