<template>
  <div>
    <div class="border-b border-black">
      <div class="container mx-auto">
        <div class="flex items-center px-2" style="height: 3rem;">
          <div class="font-mono flex-1">
            MoleculerSurvey
          </div>
          <div class="" v-if="loggedInUser">
            <nuxt-link
              :to="{ name: 'surveys' }"
            >
              앱으로
            </nuxt-link>
          </div>
          <div v-else>
            <nuxt-link
              class="mr-2 py-2"
              :to="{ name: 'signin' }"
            >
              로그인
            </nuxt-link>
            <nuxt-link
              class="py-2"
              :to="{ name: 'signup' }"
            >
              회원가입
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Main -->
    <div class="jumbotron py-40 bg-gray-100">
      <div class="container mx-auto">
        <h1 class="text-xl text-center font-mono">설문을 만들고, 참여하세요</h1>
      </div>
    </div>
    <div class="py-40">
      <div class="container mx-auto flex justify-center items-center">
        <nuxt-link
          v-if="loggedInUser"
          class="border rounded bg-black border-black text-white text-xl px-4 py-2"
          :to="{ name: 'surveys' }"
        >
          새 설문 만들기
        </nuxt-link>
        <nuxt-link
          class="border rounded bg-black border-black text-white text-xl px-4 py-2"
          v-else
          :to="{ name: 'signup' }"
        >
          계정을 만들고 첫번째 설문을 만들어보기
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from 'Vuex'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
