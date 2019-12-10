<template>
  <div class="container mx-auto">
    <div class="flex items-center px-2" style="height: 3rem;">
      <div class="font-mono flex-1">
        MoleculerSurvey
      </div>
      <div class="" v-if="loggedInUser">
        <nuxt-link
          :to="{ name: 'surveys' }"
        >
          Go to App
        </nuxt-link>
      </div>
      <div v-else>
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
