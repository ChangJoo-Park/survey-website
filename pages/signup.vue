<template>
  <div class="w-screen h-screen px-2 flex justify-center items-center">
    <form @submit.prevent="submit" class="max-w-md bg-white" style="min-width: 300px;">
      <h1 class="form--title">새 계정 만들기</h1>

      <div class="form--group">
        <div>
          <label for="username" class="form--label">이름</label>
        </div>
        <input id="username" type="text" v-model="user.username" class="form--input" required>
      </div>
      <div class="form--group">
        <div>
          <label for="email" class="form--label">이메일</label>
        </div>
        <input id="email" type="email" v-model="user.email" class="form--input" required>
      </div>
      <div class="form--group">
        <div>
          <label for="password" class="form--label">비밀번호</label>
        </div>
        <input id="password" type="password" v-model="user.password" class="form--input" required>
      </div>
      <div class="form--group">
        <input type="submit" class="form--button w-full" value="가입하기">
      </div>
      <div class="form--group text-center">
        <nuxt-link class="form--link" :to="{ name: 'signin' }">이미 계정이 있습니다</nuxt-link>
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
        password: '',
        username: ''
      }
    }
  },
  methods: {
    async submit() {
      const { data: { user } } = await this.$axios({
        method: 'POST',
        url: '/users/signup',
        data: {
          user: this.user
        }
      })
      this.$router.push({ name: 'signin' })
    }
  }
}
</script>

<style>

</style>