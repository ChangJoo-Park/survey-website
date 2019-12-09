<template>
  <div class="">
    <div>
      <logo />
      <h1 class="title">
        frontend
      </h1>
      <h2 class="subtitle">
        My ultimate Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <template v-if="loggedInUser">
          <nuxt-link
            :to="{ name: 'surveys' }"
            class="button--grey"
          >
            Go to App
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            :to="{ name: 'signin' }"
          >
            Sign In
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'signup' }"
          >
            Sign Up
          </nuxt-link>
        </template>
      </div>
    </div>

    <div>
      <h1 class="">공개된 설문 목록</h1>
      <ul>
        <li v-for="survey in surveys" :key="survey._id">
          <nuxt-link :to="{ name: 'take-id', params: { id: survey._id } }">
            {{ survey.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from 'Vuex'

export default {
  async asyncData ({ app, query, req, params }) {
    const { data } = await app.$axios({
      url: `http://localhost:3000/api/surveys/public`,
    })
    return { surveys: data }
  },
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
