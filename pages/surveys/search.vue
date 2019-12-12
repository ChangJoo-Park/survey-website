<template>
  <div>
    {{ surveys }}
  </div>
</template>

<script>
export default {
  async asyncData ({ app, query, req, params }) {
    const { term = '' }  = query
    const { data: surveys } = await app.$axios.get('/me/surveys/search', {params: { term }})
    return {
      surveys
    }
  },
  watch: {
    '$route.query.term': {
      async handler (term) {
        if (term === '') {
          return
        }

        const { data: surveys } = await this.$axios.get('/me/surveys/search', {params: { term }})
        this.surveys = surveys
      }
    }
  }
}
</script>

<style>

</style>