<template>
  <div>
    <div class="bg-black sticky">
      <div class="flex items-center px-4 container mx-auto" style="height: 3rem;">
        <div class="flex flex-row items-center flex-1">
          <nuxt-link :to="{ name: 'index' }" class="text-white font-mono mr-8">Survey</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys' }" class="nav--link">대시보드</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys-list' }" class="nav--link">설문현황</nuxt-link>&nbsp;
          <nuxt-link :to="{ name: 'surveys-create' }" class="nav--link mr-8">설문만들기</nuxt-link>&nbsp;
          <form class="" @submit.prevent="search">
            <input
              type="search"
              class="search--input"
              style="min-width: 300px;"
              placeholder="설문을 찾아보세요"
              v-model.trim="searchTerm"
            >
          </form>
        </div>
        <div class="flex items-center">
          <account-dropdown :avatar="''" :username="loggedInUser.username" :dropdown-options="dropdownOptions" />
        </div>
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AccountDropdown from '~/components/account-dropdown.vue'

export default {
  components: {
    AccountDropdown
  },
  async asyncData ({ app, query, req, params, route }) {
    if (route.name === 'surveys-search' && query.term) {
      return { searchTerm: query.term }
    }
    return { searchTerm: '' }
  },
  data () {
    const vueInstance = this
    return {
      socket: null,
      searchTerm: '',
      dropdownOptions: [
        {
          label: '계정',
          type: 'route',
          to: {
            name: 'surveys-me'
          }
        },
        {
          label: '설정',
          type: 'route',
          to: {
            name: 'surveys-setting'
          }
        },
        { type: 'divider' },
        {
          label: '지원',
          type: 'action',
          do() {
            console.log(vueInstance)
          }
        },
        {
          label: '로그아웃',
          type: 'action',
          do() {
            console.log(vueInstance)
          }
        },
      ]
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