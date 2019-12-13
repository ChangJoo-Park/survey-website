<template>
  <div>
    <div class="border-b border-black">
      <div class="container mx-auto">
        <div class="flex items-center px-2" style="height: 3rem;">
          <div class="font-mono flex-1">
            <a href="/">Survey</a>
          </div>
          <div class="" v-if="loggedInUser">
            <nuxt-link
              :to="{ name: 'surveys' }"
              class="app--landing nav--link font-mono"
            >
              {{ loggedInUser.username }}
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
    <div class="jumbotron py-40 border-b border-b-8 border-indigo-900">
      <div class="container mx-auto">
        <div>
          <h1 class="text-6xl text-center font-mono font-bold">Survey</h1>
        </div>
        <div class="mb-8">
          <p class="text-xl text-center font-mono">설문을 만들고, 참여하세요</p>
        </div>
        <div class="flex justify-center items-center">
          <div v-if="loggedInUser">
            <nuxt-link class="form--button" :to="{ name: 'surveys' }">
              새로운 설문을 만들어보세요
            </nuxt-link>
          </div>
          <nuxt-link class="form--button" v-else :to="{ name: 'signup' }">
            시작하기
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="py-20 bg-indigo-900">
      <div class="container mx-auto flex max-w-lg justify-around text-center">
        <div class="font-mono font-bold text-white" v-for="(item, key, index) in stats" :key="index">
          <animated-number
            :value="item"
            :formatValue="(value) => value.toFixed(0)"
            :duration="300"
            :delay="200"
            class="text-6xl"
          />
          <div class="text-3xl">{{ getStatisticsLabel(key) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AnimatedNumber from "animated-number-vue"

export default {
  components: {
    AnimatedNumber
  },
  data () {
    return {
      stats: {
        surveys: 0,
        users: 0,
        participations: 0,
      }
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  mounted () {
    setTimeout(() => {this.getStatistics().then(({ data }) => { this.stats = data })}, 500)
  },
  methods: {
    getStatistics () {
      return this.$axios.get('/app-stats')
    },
    getStatisticsLabel (key) {
      switch (key) {
        case 'surveys':
          return '설문조사'
        case 'users':
          return '사용자'
        case 'participations':
          return '설문참여'
        default:
          return ''
      }
    }
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
